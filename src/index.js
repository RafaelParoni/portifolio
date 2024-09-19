  
  import React from 'react'; // import React.js

  // import React Routes 
  import ReactDOM from 'react-dom/client';
  import { BrowserRouter, Routes, Route } from "react-router-dom";

  import './index.css'; // import Css page

  // Import Pages/Componentes
  import Inicio from './Pages/Inicio/Inicio';
  import Sobre from './Pages/Sobre/Sobre';
  import SearchProjeto from './Pages/ProjetosPage/Search/Search';
  import ProjetosPage from './Pages/ProjetosPage/Projetos.js'; 
  import Curriculo from './Pages/curriculo/Curriculo.js';



  // Import Contents
  import NavBar from './components/NavBar/Navbar.js';
  


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
        <Route path='/curriculo' element={<Curriculo/>}/>
      </Routes>
    </BrowserRouter> 
  );

