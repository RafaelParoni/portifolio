import './Navbar.css'
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

function NavBar(){

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
            </div>
        </div>
    )
}


export default NavBar;