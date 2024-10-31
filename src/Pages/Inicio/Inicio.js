import './Inicio.css'

import About from './components/about';
import Technics from './components/technics';
import Projetos from './components/projetos';
import ProjetoDestaque from './components/projetoDest';

function Inicio() {
  return (
    <main className='inicio'>
      <About/>
      <Technics/>
      <div className='projetos'>
        <ProjetoDestaque/>
        <Projetos/>
      </div>
    </main>
  );
}

export default Inicio;