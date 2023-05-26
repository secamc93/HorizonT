import React, { useState } from 'react';
import '../index.css';


function RegistroVisita() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [unidad, setUnidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Cédula:', cedula);
    console.log('Unidad:', unidad);
    setNombre('');
    setApellido('');
    setCedula('');
    setUnidad('');
  };

  return (
    <div className= " bg-gray-700 p-3 rounded-lg shadow-md  items-start m-20 max-w-xs mx-auto" >
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
