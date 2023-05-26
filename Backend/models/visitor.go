package models

import (
	"gorm.io/gorm"
)

type Visitors struct {
	gorm.Model

	NameVisitor     string `gorm:"not null" json:"name"`
	LastNameVisitor string `gorm:"not null" json:"lastname"`
	DniVisitor      int    `gorm:"not null" json:"dni"`
	Unity           int    `gorm:"not null" json:"unity"`
}
