package env

import (
	"os"

	"github.com/joho/godotenv"
)

func init() {
	godotenv.Load()
}

func GetEnv(key string) string {
	return os.Getenv(key)
}
