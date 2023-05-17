package models

import (
	"time"

	"gorm.io/gorm"
)

type Visita struct {
	gorm.Model
	ID               uint `gorm:"primaryKey"`
	VisitanteID      uint
	UnidadID         uint
	FechaHoraEntrada time.Time `gorm:"not null"`
	FechaHoraSalida  time.Time
	MotivoVisita     string    `gorm:"size:255"`
	Observaciones    string    `gorm:"type:text"`
	Visitante        Visitante `gorm:"foreignKey:VisitanteID"`
	Unidad           Unidad    `gorm:"foreignKey:UnidadID"`
}
