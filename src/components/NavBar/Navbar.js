import './Navbar.css'
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { ModeDetection } from '../../functions/ThemeMode';


function NavBar(){

    function alternMode(value){
        
    }

    return(
        <div className='navbar'>
            <div className='menu'>
                <button>Inicio</button>
                <button>Sobre</button>
                <button>Projetos</button>
            </div>
            <div className='redes'>
                <button><BsLinkedin/></button>
                <button><BsGithub/></button>
                <button><BsInstagram/></button>
                <button onClick={() => alternMode()} >
                    <span id='LightBtn' style={{display: 'auto'}}>A</span>
                    <span id='DarkBtn' style={{display: 'none'}}>B</span>
                </button>
            </div>
        </div>
    )
}


export default NavBar;