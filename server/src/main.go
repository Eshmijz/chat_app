package main

import (
	"log"
	"strings"

	"github.com/Eshmijz/chat_app/src/domain"
	"github.com/Eshmijz/chat_app/src/handlers"
	"github.com/Eshmijz/chat_app/src/services"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cache"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/websocket/v2"
)

func main() {
	pubsub := services.NewPubSubService()
	hub := domain.NewHub(pubsub)
	go hub.SubscribeMessages()
	go hub.RunLoop()

	app := fiber.New()
	app.Use(cors.New())

	app.Use(cache.New(cache.Config{
		Next: func(c *fiber.Ctx) bool {
			return strings.Contains(c.Route().Path, "/ws")
		},
	}))

	app.Use("/ws", func(c *fiber.Ctx) error {
		if websocket.IsWebSocketUpgrade(c) {
			return c.Next()
		}
		return fiber.ErrUpgradeRequired
	})

	app.Get("/ws", websocket.New(func(c *websocket.Conn) {
		handlers.NewWebsocketHandler(hub).Handle(c)
		for {}
	}))

	port := "80"
	log.Printf("Listening on port %s", port)
	log.Fatal(app.Listen(":" + port))
}
