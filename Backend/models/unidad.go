package models

import (
	"gorm.io/gorm"
)

type Unidad struct {
	gorm.Model
	ID             uint   `gorm:"primaryKey"`
	Nombre         string `gorm:"size:255;not null"`
	PropietarioID  uint
	ArrendatarioID uint
	Tipo           string    `gorm:"size:50;not null"`
	Area           float64   `gorm:"type:numeric(10,2);not null"`
	Propietario    Residente `gorm:"foreignKey:PropietarioID"`
	Arrendatario   Residente `gorm:"foreignKey:ArrendatarioID"`
}
