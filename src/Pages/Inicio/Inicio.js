import './Inicio.css'

import About from './components/about';
import Technics from './components/technics';
import Projetos from './components/projetos';
import Contato from './components/contato';

function Inicio() {
  return (
    <main className='inicio'>
      <About/>
      <Technics/>
      <Projetos/>
      <Contato/>
    </main>
  );
}

export default Inicio;