package db

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Se modifica la ruta DB agregando el archivo connection.go
// connection.go se encarga de realizar la conexión a la bbdd
var DSN = "host=localhost user=cam password=2004 dbname=horizont sslmode=disable" //cadena de conexión
var DB *gorm.DB                                                                   //variable DB para llamar GORM

func DBConnection() {
	var error error
	DB, error = gorm.Open(postgres.Open(DSN), &gorm.Config{})
	if error != nil {
		log.Fatal(error)
	} else {
		log.Println("DB CONNECTED") //Mensaje de respuesta por consola para confirmar la conexión a la bbdd
	}
}
