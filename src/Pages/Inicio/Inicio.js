import './Inicio.css';
// import Components - 
import Title from './components/Title';
import Description from './components/Description';
import ProjetosButton from './components/ProjetosButton';
import NotificationFunction from '../../components/Notification/Notification';

function Inicio() {
  return (
    <div>
      <div className='centerPageInicio'>
          <Title/>
          <Description/>
          <ProjetosButton/>
      </div>
      <NotificationFunction/>
    </div>
  );
}

export default Inicio;