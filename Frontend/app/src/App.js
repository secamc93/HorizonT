import React, { useEffect, useState } from 'react';
import AppWrapper from './Components/AppWrapper';
import RegistroVisita from './Components/RegistroVisita';
import './App.css';
import Header from './Components/Header';
import Tabla from './Components/Tabla';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error(error));
  }, []);

  return (
      <AppWrapper>
          <Header />
          <p>{message}</p>
          <RegistroVisita />
          <Tabla/>
      </AppWrapper>
  );
}

export default App;




