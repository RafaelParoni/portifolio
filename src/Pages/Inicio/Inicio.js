import './Inicio.css'

import About from './components/about';
import Technics from './components/technics';
import Projetos from './components/projetos';

function Inicio() {
  return (
    <main className='inicio'>
      <About/>
      <Technics/>
      <Projetos/>
    </main>
  );
}

export default Inicio;