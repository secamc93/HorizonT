import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full z-50 bg-green-700 p-2 inset-x-0">
      <div className="flex justify-around items-center text-white">
        <p>Teléfono: 123-456-7890</p>
        <p>Correo Electrónico: ejemplo@correo.com</p>
        <p>Dirección: 123 Calle Principal, Ciudad, País</p>
      </div>
    </footer>
  );
};

export default Footer;
