package main

import (

	//"log"
	"HorizonT/db"
	"HorizonT/models"
	"HorizonT/routes"
	"net/http"

	"github.com/gorilla/mux"
	//"github.com/gin-gonic/gin"
	//"gorm.io/gorm"
	//"gorm.io/driver/postgres"
)

func main() {
	//Se separan las variables y funciones para utilizar mejores practicas

	db.DBConnection()

	//Se utiliza automigrate para crear modelos (tablas en DB)
	db.DB.AutoMigrate(models.Visitors{})

	r := mux.NewRouter()

	//llamado del index

	r.HandleFunc("/", routes.HomeHandler)

	//llamado de la API
	s := r.PathPrefix("/api").Subrouter()
	//llamado al endpoint para visitors
	s.HandleFunc("/visitors", routes.PostVisitorHandler).Methods("POST")

	http.ListenAndServe(":8080", r)
}
