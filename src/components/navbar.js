import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';

import NavbarItem from './navbarItem';

function Navbar(props) {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          SCAC
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-inicio'
              label='Inicio'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-quartos'
              label='Quartos'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-hospede'
              label='Hospede'
            />
          </ul>
           <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-tarifas'
              label='Tarifas'
            />
          </ul>
           <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-CalendarioReservas'
              label='Calendário Reservas'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-Pagamentos'
              label='Pagamentos'
            />
          </ul>
           <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-Pacotes'
              label='Pacotes'
            />
          </ul>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-administrador'
              label='Administrador'
            />
          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;