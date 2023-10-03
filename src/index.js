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
 
var Tema = window.localStorage.getItem('Tema')

if(Tema === null){
  window.localStorage.setItem('Tema', 'Light')
}else{
  console.log('Temos um tema ativo!')
}

async function DedetectMode(){
  var DarkModeBtn = document.getElementById('DarkMode')
  var lightModeBtn = document.getElementById('LightMode')
  var DarkModeBtnMobile = document.getElementById('DarkModeMobile')
  var lightModeBtnMobile = document.getElementById('LightModeMobile')
  var htmlBody = document.getElementById('html')
    if(Tema === 'Dark'){
        htmlBody.removeAttribute('class')
        htmlBody.setAttribute('class', 'dark-mode')
        DarkModeBtn.style.display = 'flex'
        lightModeBtn.style.display = 'none'
        DarkModeBtnMobile.style.display = 'flex'
        lightModeBtnMobile.style.display = 'none'
        window.localStorage.setItem('Tema', 'Dark')
        console.log(Tema)
  }else{
        htmlBody.removeAttribute('class')
        htmlBody.setAttribute('class', 'light-mode')
        DarkModeBtn.style.display = 'none'
        DarkModeBtnMobile.style.display = 'none'
        lightModeBtn.style.display = 'flex'
        lightModeBtnMobile.style.display = 'flex'
        window.localStorage.setItem('Tema', 'Light')
        console.log(Tema)
  }
}
setTimeout( DedetectMode, 100)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter> 
   <NavBar/> 
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path='/contato' element={<Sobre/>}/>
      <Route path='/projetos' element={<ProjetosPage/>}/>
      <Route path='/projetos/search' element={<SearchProjeto/>}/>
    </Routes>
   <Background/>
  </BrowserRouter> 
);

