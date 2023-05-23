import React, { useState } from 'react';
import './RegistroVisita.css';


function RegistroVisita() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [unidad, setUnidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos capturados, como enviarlos al servidor o realizar validaciones.
    // Puedes acceder a los valores ingresados por el usuario a través de las variables 'nombre', 'apellido', 'cedula' y 'unidad'.
    // Por ejemplo:
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Cédula:', cedula);
    console.log('Unidad:', unidad);

    // Puedes restablecer los campos después de enviar los datos si es necesario
    setNombre('');
    setApellido('');
    setCedula('');
    setUnidad('');
  };

  return (
    <div className="registro-visita">
      <h2>Registro de visita</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          <label>Cédula:</label>
          <input
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
        </div>
        <div>
          <label>Unidad:</label>
          <input
            type="text"
            value={unidad}
            onChange={(e) => setUnidad(e.target.value)}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default RegistroVisita;
