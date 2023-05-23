import React, { useEffect, useState } from 'react';
import AppWrapper from './Components/AppWrapper';
import RegistroVisita from './Components/RegistroVisita';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>Bienvenido a HorizonT</h1>
      <p>{message}</p>
      <RegistroVisita /> {RegistroVisita}

      <AppWrapper/>
    </div>
   


    
    
  );
}

export default App;
