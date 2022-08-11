package main

import (
	"fmt"
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

	app.Get("/ws/:channel", websocket.New(func(c *websocket.Conn) {
		channel := c.Params("channel")
		pubsub := services.NewPubSubService()
		hub := domain.NewHub(pubsub, channel)
		go hub.SubscribeMessages()
		go hub.RunLoop()

		handlers.NewWebsocketHandler(hub).Handle(c)
		for {}
	}))

	app.Get("/api/hello/:id", func(c *fiber.Ctx) error {
		fmt.Println("hoge")
		id := c.Params("id")
		return c.SendString("Hello" + id)
	})

	port := "80"
	log.Printf("Listening on port %s", port)
	log.Fatal(app.Listen(":" + port))
}
