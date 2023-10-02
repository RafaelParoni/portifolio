import './Inicio.css';
// import Components - 
import Title from './components/Title';
import Description from './components/Description';
import ProjetosButton from './components/ProjetosButton';

function Inicio() {
  return (
    <div>
      <div className='centerPageInicio'>
          <Title/>
          <Description/>
          <ProjetosButton/>
      </div>
    </div>
  );
}

export default Inicio;