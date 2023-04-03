package routers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func User(c *gin.Context) {
	c.String(http.StatusOK, "hello from user")
}
