package routes

import (
	"HorizonT/db"
	"HorizonT/models"
	"encoding/json"
	"net/http"
)

//api de visitors

func PostVisitorHandler(w http.ResponseWriter, r *http.Request) {
	//registro de visitantes en bbdd
	var visitor models.Visitors
	json.NewDecoder(r.Body).Decode(&visitor)
	createdVisitor := db.DB.Create(&visitor)
	err := createdVisitor.Error
	//respuesta si se pasa un parametro mal
	if err != nil {
		w.WriteHeader(http.StatusBadRequest) //Error 400
		w.Write([]byte(err.Error()))
	}
	//confirmación de datos registrados en bbdd
	json.NewEncoder(w).Encode(&visitor)

}
