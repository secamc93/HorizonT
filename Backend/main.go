package main

import (
	"HorizonT/db"
	"HorizonT/models"
	"HorizonT/routes"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	db.DBConnection()
	db.DB.AutoMigrate(models.Visitors{})

	r := mux.NewRouter()

	r.HandleFunc("/", routes.HomeHandler)

	s := r.PathPrefix("/api").Subrouter()
	s.HandleFunc("/visitors", routes.PostVisitorHandler).Methods("POST")
	s.HandleFunc("/visitors", routes.GetVisitorHandler).Methods("GET")

	handler := cors.Default().Handler(r)
	http.ListenAndServe(":8080", handler)
}
