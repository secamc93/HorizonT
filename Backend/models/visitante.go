package models

import (
	"gorm.io/gorm"
)

type Visitante struct {
	gorm.Model
	ID                 uint   `gorm:"primaryKey"`
	Nombre             string `gorm:"size:255;not null"`
	Identificacion     string `gorm:"size:50;unique"`
	TipoIdentificacion string `gorm:"size:50"`
	Telefono           string `gorm:"size:50"`
	Foto               []byte
}
