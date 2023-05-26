import React, { useState } from 'react';
import '../index.css';

function RegistroVisita() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [unidad, setUnidad] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const visita = {
      name: nombre,
      lastname: apellido,
      dni: cedula,
      unity: unidad
    };

    try {
      const response = await fetch('http://localhost:8080/api/visitors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(visita)
      });
      
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      mostrarMensaje('Visita registrada con éxito', 'success');
    } catch (error) {
      mostrarMensaje('Hubo un error registrando la visita: ' + error.message, 'error');
    }

    setNombre('');
    setApellido('');
    setCedula('');
    setUnidad('');
  };

  function mostrarMensaje(mensaje, tipo) {
    const mensajeElemento = document.getElementById('mensaje');
    mensajeElemento.textContent = mensaje;

    if (tipo === 'success') {
      mensajeElemento.style.color = 'green';
    } else if (tipo === 'error') {
      mensajeElemento.style.color = 'red';
    }
  };

  
  

  return (
    <div className= "flex-grow bg-gray-700 p-6 rounded-lg shadow-md  items-start m-20 max-w-xs mx-auto" >
      <p id="mensaje"  className="text-center   p-1"></p>

      <h2 className="text-white text-center font-bold uppercase">Registro de visita</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="my-2">
          <label className="text-white text-center font-bold uppercase block mb-2 cursor-pointer transition-colors duration-300 hover:text-red-500">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="bg-white text-black px-3 py-2 rounded w-full text-center"
          />
        </div>
        <div className="my-2">
          <label className="text-white text-center font-bold uppercase block mb-2 cursor-pointer transition-colors duration-300 hover:text-red-500">Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="bg-white text-black px-3 py-2 rounded w-full text-center"
          />
        </div>
        <div className="my-2">
          <label className="text-white text-center font-bold uppercase block mb-2 cursor-pointer transition-colors duration-300 hover:text-red-500">Cédula:</label>
          <input
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            className="bg-white text-blacsk px-4 py-2 rounded w-full text-center"
          />
        </div>
        <div className="my-2">
          <label className="text-white text-center font-bold uppercase block mb-2 cursor-pointer transition-colors duration-300 hover:text-red-500">Unidad:</label>
          <input
            type="text"
            value={unidad}
            onChange={(e) => setUnidad(e.target.value)}
            className="bg-white text-black px-3 py-2 rounded w-full text-center"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-5 py-2 rounded cursor-pointer mx-auto block shadow-md transition-colors duration-300 hover:bg-red-500">Guardar</button>
      </form>
    </div>
  );
}

export default RegistroVisita;
