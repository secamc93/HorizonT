package main

import (
	"HorizonT/controllers"
	"HorizonT/models"
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	dsn := "postgres://cam:2004@localhost/horizont?sslmode=disable"
	var err error
	models.DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatalf("Error al conectar a la base de datos: %v", err)
	}

	// Migrate the schema
	err = models.DB.AutoMigrate(&models.Visitante{})
	models.DB.AutoMigrate(&models.Residente{}, &models.Unidad{}, &models.Visitante{}, &models.Visita{})

	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "¡Bienvenido a HorizonT!",
		})
	})

	// Rutas para visitas
	r.GET("/visitas", controllers.GetVisitas)
	r.POST("/visitas", controllers.CreateVisita)
	r.GET("/visitas/:id", controllers.GetVisita)
	r.PUT("/visitas/:id", controllers.UpdateVisita)
	r.DELETE("/visitas/:id", controllers.DeleteVisita)

	//Rutas para visitante
	r.POST("/visitante", controllers.InsertarVisitante)

	r.Run(":8080")
}
