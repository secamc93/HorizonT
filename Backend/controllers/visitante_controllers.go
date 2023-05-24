package controllers

// Aquí irían las funciones para manejar las solicitudes HTTP de los visitantes (GetVisitantes, CreateVisitante, GetVisitante, UpdateVisitante, DeleteVisitante)
import (
	"HorizonT/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func InsertarVisitante(c *gin.Context) {
	// Crear una instancia del modelo Residente y asignar los datos proporcionados
	visitante := models.Visitante{
		Model:              gorm.Model{},
		ID:                 0,
		Nombre:             c.PostForm("nombre"),
		Identificacion:     c.PostForm("identificacion"),
		TipoIdentificacion: c.PostForm("tipo_identificacion"),
		Telefono:           c.PostForm("telefono"),
		Foto:               []byte{},
	}