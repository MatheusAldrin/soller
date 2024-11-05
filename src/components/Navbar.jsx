import React from 'react';
import Logo from '../assets/soller.svg';
import Button from './button';

function Navbar() {
  return (
    <nav className="flex py-6 justify-between relative z-20">
      <div className="flex items-center">
        <img src={Logo} alt="Logo Soller" className="h-9 w-20 mr-10" />
        <ul className="flex space-x-6 font-roboto font-medium">
          <li>
            <a href="#home" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#sobre" className="text-base ">
              Sobre
            </a>
          </li>
          <li>
            <a href="#portifolio" className="">
              Portfólio
            </a>
          </li>
          <li>
            <a href="#contato" className="">
              Contato
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row ml-auto">
        <Button>Request a Quote</Button>
      </div>
    </nav>
  );
}

export default Navbar;
