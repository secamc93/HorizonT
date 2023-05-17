package controllers

import (
	"HorizonT/models" // Reemplaza "your_project" con el nombre de tu proyecto
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetResidentes(c *gin.Context) {
	var residentes []models.Residente
	result := models.DB.Find(&residentes)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, residentes)
}

//
