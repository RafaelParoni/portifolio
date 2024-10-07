import './Inicio.css'

import About from './components/about';
import Technics from './components/technics';

function Inicio() {
  return (
    <main className='inicio'>
      <About/>
      <Technics/>
    </main>
  );
}

export default Inicio;