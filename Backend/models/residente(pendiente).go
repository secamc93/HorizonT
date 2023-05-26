package models

import (
	"gorm.io/gorm"
)

type Residente struct {
	gorm.Model
	ID                 uint   `gorm:"primaryKey"`
	Nombre             string `gorm:"size:255;not null"`
	Identificacion     string `gorm:"size:50;not null;unique"`
	TipoIdentificacion string `gorm:"size:50;not null"`
	Telefono           string `gorm:"size:50"`
	CorreoElectronico  string `gorm:"size:255;unique"`
	EsPropietario      bool   `gorm:"not null"`
}
