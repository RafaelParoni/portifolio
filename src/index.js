  
  import React from 'react'; // import React.js

  // import React Routes 
  import ReactDOM from 'react-dom/client';
  import { BrowserRouter, Routes, Route } from "react-router-dom";

  import './index.css'; // import Css page

  // Import Pages/Componentes
  import Inicio from './Pages/Inicio/Inicio';



  // Import Contents
  import NavBar from './components/NavBar/Navbar.js';
  


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render( 
    <BrowserRouter> 
     <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter> 
  );

