import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Inicio from './Pages/Inicio/Inicio';
import Sobre from './Pages/Sobre/Sobre';
import Background from './components/Background/Background';
import NavBar from './components/NavBar/Navbar';
import SearchProjeto from './Pages/ProjetosPage/Search/Search';
import ProjetosPage from './Pages/ProjetosPage/Projetos.js'; 
 
window.hash = 'dark'
// console.log(window.hash)
// console.log(window)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <NavBar/>
   <Background/>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path='/contato #contato' element={<Sobre/>}/>
      <Route path='/projetos' element={<ProjetosPage/>}/>
      <Route path='/projetos/search' element={<SearchProjeto/>}/>

    </Routes>
  </BrowserRouter>
);

