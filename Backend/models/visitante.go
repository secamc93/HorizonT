package models

import (
	"time"

	"gorm.io/gorm"
)

type Visitante struct {
	gorm.Model
	ID                 string         `gorm:"primaryKey;type:uuid"`
	Nombre             string         `gorm:"size:255;not null"`
	Identificacion     string         `gorm:"size:50;unique"`
	TipoIdentificacion string         `gorm:"size:50"`
	Telefono           string         `gorm:"size:50"`
	Foto               []byte         `gorm:"type:bytea"` // Asegúrate de usar el tipo correcto para la columna de imagen/foto
	Created_At         time.Time      `gorm:"type:timestamp;default:null"`
	Updated_At         time.Time      `gorm:"type:timestamp;default:null"`
	Deleted_At         gorm.DeletedAt `gorm:"type:timestamp;default:null"`
}
