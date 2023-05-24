package controllers

// Aquí irían las funciones para manejar las solicitudes HTTP de los visitantes (GetVisitantes, CreateVisitante, GetVisitante, UpdateVisitante, DeleteVisitante)
import (
	"HorizonT/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func InsertarVisitante(c *gin.Context) {
	// Crear una instancia del modelo Residente y asignar los datos proporcionados
	visitante := models.Visitante{
		Nombre:             c.PostForm("nombre"),
		Identificacion:     c.PostForm("identificacion"),
		TipoIdentificacion: c.PostForm("tipo_identificacion"),
		Telefono:           c.PostForm("telefono"),
	}

	// Realizar la inserción en la base de datos
	result := models.DB.Create(&visitante)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	// Devolver la respuesta de éxito con el residente creado
	c.JSON(http.StatusOK, gin.H{"message": "Residente creado exitosamente", "residente": visitante})
}
