package main

import (
	"fmt"

	"github.com/Meyazhagan/Deque/api/v1/routers"
	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Deque Backend Server")

	r := gin.Default()
	r.Group("/user", routers.User)

	r.Run(":4000")

	// r := gin.Default()

	// port := env.GetEnv("PORT")

	// r.GET("/", func(c *gin.Context) {
	// 	c.String(http.StatusOK, "Deque Backend Server Running...")
	// })

	// r.Run(":" + port)

	// fmt.Printf("Listening on port " + port)
}
