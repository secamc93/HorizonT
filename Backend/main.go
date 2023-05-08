package main

import (
	"database/sql"
	"log"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

func connectToDB() (*sql.DB, error) {
	connStr := "user=<postgres> password=<2004> dbname=<HorizonT> host=192.168.48.1 port=5433 sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	return db, nil
}

func obtenerVisitas(c *gin.Context) {
	// Implementar la lógica para obtener las visitas
}

func crearVisita(c *gin.Context) {
	// Implementar la lógica para crear una visita
}

func obtenerVisita(c *gin.Context) {
	// Implementar la lógica para obtener una visita por ID
}

func actualizarVisita(c *gin.Context) {
	// Implementar la lógica para actualizar una visita por ID
}

func eliminarVisita(c *gin.Context) {
	// Implementar la lógica para eliminar una visita por ID
}

func main() {
	r := gin.Default()
	db, err := connectToDB()

	if err != nil {
		log.Fatalf("Error al conectar a la base de datos: %v", err)
	}
	defer db.Close()

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "¡Bienvenido a HorizonT!",
		})
	})

	// Rutas para visitas
	r.GET("/visitas", obtenerVisitas)
	r.POST("/visitas", crearVisita)
	r.GET("/visitas/:id", obtenerVisita)
	r.PUT("/visitas/:id", actualizarVisita)
	r.DELETE("/visitas/:id", eliminarVisita)

	r.Run(":5432")
}
