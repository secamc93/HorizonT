package controllers

import (
	"HorizonT/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func InsertarVisitante(c *gin.Context) {
	// Generar un ID único para el visitante

	// Crear una instancia del modelo Visitante y asignar los datos proporcionados
	visitante := models.Visitante{
		ID:                 uuid.New().String(),
		Nombre:             c.PostForm("nombre"),
		Identificacion:     c.PostForm("identificacion"),
		TipoIdentificacion: c.PostForm("tipo_identificacion"),
		Telefono:           c.PostForm("telefono"),
		Foto:               []byte{},
	}

	// Realizar la inserción en la base de datos
	err := models.DB.Create(&visitante).Error
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Devolver la respuesta de éxito con el visitante creado
	c.JSON(http.StatusOK, gin.H{"message": "Visitante creado exitosamente", "visitante": visitante})
}
