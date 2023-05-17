package controllers

import (
	"HorizonT/models"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetVisitas maneja la solicitud GET /visitas
func GetVisitas(c *gin.Context) {
	var visitas []models.Visita
	models.DB.Find(&visitas)

	c.JSON(200, visitas)
}

// CreateVisita maneja la solicitud POST /visitas
func CreateVisita(c *gin.Context) {
	var visita models.Visita
	err := c.ShouldBindJSON(&visita)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	result := models.DB.Create(&visita)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, visita)
}

// GetVisita maneja la solicitud GET /visitas/:id
func GetVisita(c *gin.Context) {
	id := c.Param("id")

	// Convertir el ID de string a int
	visitaID, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID de visita inválido"})
		return
	}

	var visita models.Visita
	result := models.DB.First(&visita, visitaID)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Visita no encontrada"})
		return
	}

	c.JSON(http.StatusOK, visita)
}

// UpdateVisita maneja la solicitud PUT /visitas/:id
func UpdateVisita(c *gin.Context) {
	id := c.Param("id")

	// Convertir el ID de string a int
	visitaID, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID de visita inválido"})
		return
	}

	// Obtener la visita existente de la base de datos
	var visita models.Visita
	result := models.DB.First(&visita, visitaID)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Visita no encontrada"})
		return
	}

	// Vincular los datos JSON de la solicitud a la visita existente
	err = c.ShouldBindJSON(&visita)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Actualizar la visita en la base de datos
	result = models.DB.Save(&visita)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, visita)
}

// DeleteVisita maneja la solicitud DELETE /visitas/:id
func DeleteVisita(c *gin.Context) {
	id := c.Param("id")

	// Convertir el ID de string a int
	visitaID, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID de visita inválido"})
		return
	}

	// Obtener la visita existente de la base de datos
	var visita models.Visita
	result := models.DB.First(&visita, visitaID)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Visita no encontrada"})
		return
	}

	// Eliminar la visita de la base de datos
	result = models.DB.Delete(&visita)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Visita eliminada correctamente"})
}
