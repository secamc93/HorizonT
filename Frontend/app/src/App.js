import React, { useEffect, useState } from 'react';
import AppWrapper from './Components/AppWrapper';
import RegistroVisita from './Components/RegistroVisita';
import './App.css';
import Header from './Components/Header';
import Tabla from './Components/Tabla';
import Footer from './Components/Footer';

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
          <RegistroVisita />
          <Tabla/>
          <Footer/>
          <p>{message}</p>
      </AppWrapper>
  );
}

export default App;




