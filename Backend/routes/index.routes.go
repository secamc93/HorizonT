package routes

import "net/http"

//Funcion para direccionar a la capa de visualización
func HomeHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("HorizonT"))
}
