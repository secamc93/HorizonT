package models

import (
	"time"

	"gorm.io/gorm"

	"github.com/google/uuid"
)

type Visita struct {
	gorm.Model
	ID               uuid.UUID `gorm:"primaryKey"`
	VisitanteID      uuid.UUID
	Visitante        Visitante `gorm:"foreignKey:VisitanteID"`
	UnidadID         uint
	Unidad           Unidad    `gorm:"foreignKey:UnidadID"`
	FechaHoraEntrada time.Time `gorm:"not null"`
	FechaHoraSalida  time.Time
	MotivoVisita     string `gorm:"size:255"`
	Observaciones    string `gorm:"type:text"`
}
