package handlers

import (
	"github.com/Eshmijz/chat_app/src/domain"
	"github.com/gofiber/websocket/v2"
)

type WebsocketHandler struct {
	hub *domain.Hub
}

func NewWebsocketHandler(hub *domain.Hub) *WebsocketHandler {
	return &WebsocketHandler{
		hub: hub,
	}
}

func (h *WebsocketHandler) Handle(c *websocket.Conn) {
		client := domain.NewClient(c)
		go client.ReadLoop(h.hub.BroadcastCh, h.hub.UnRegisterCh)
		go client.WriteLoop()
		h.hub.RegisterCh <- client
	}

