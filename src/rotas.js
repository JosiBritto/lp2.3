import React from "react";

import ListagemInicio from './views/listagem-inicio';
import ListagemQuartos from './views/listagem-quartos';
import ListagemHospede from './views/listagem-hospede';
import ListagemTarifas from './views/listagem-tarifas';
import ListagemCalendarioReservas from './views/listagem-calendarioReservas';
import ListagemPagamentos from './views/listagem-pagamentos';
import ListagemPacotes from './views/listagem-pacotes';
import ListagemAdministrador from './views/listagem-administrador';

import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
function Rotas(props) {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/listagem-inicio' element={<ListagemInicio />} />
         <Route path='/listagem-quartos' element={<ListagemQuartos />} />
         <Route path='/listagem-hospede' element={<ListagemHospede />} />
         <Route path='/listagem-tarifas' element={<ListagemTarifas />} />
         <Route path='/listagem-calendarioReservas' element={<ListagemCalendarioReservas />} />
         <Route path='/listagem-pagamentos' element={<ListagemPagamentos />} />
         <Route path='/listagem-pacotes' element={<ListagemPacotes />} />
         <Route path='/listagem-administrador' element={<ListagemAdministrador />} />
         
      </Routes>

    </BrowserRouter>
  );
}

export default Rotas;
