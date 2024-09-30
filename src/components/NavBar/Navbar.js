import './Navbar.css'
import { BsEnvelopeFill, BsGithub, BsLinkedin, BsMoonFill, BsFillBrightnessLowFill } from "react-icons/bs";
import { AutoModeDetection, SetNewMode } from '../../functions/ThemeMode';


function NavBar(){

    function alternMode(){
        var themeBtn = document.getElementById("ThemeBtn")
        if(AutoModeDetection() === 'Dark'){
            themeBtn.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"></path></svg>'
            SetNewMode('Light')
        }else{
            themeBtn.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path></svg>'
            SetNewMode('Dark')
        }
    }

    function ThemeBtn(){
        if(AutoModeDetection() === 'Dark'){
            return <span><BsMoonFill/></span>
        }else{
            return <span><BsFillBrightnessLowFill/></span>
        }
    }

    return(
        <div className='navbar'>
            <div className='menu'>
                <button onClick={()=> window.location.hash = ''}>Inicio</button>
                <button onClick={()=> window.location.hash = 'sobre'}>Sobre</button>
                <button onClick={()=> window.location.hash = 'projetos'}>Projetos</button>
            </div>
            <div className='redes'>
                <button onClick={()=> window.open('https://www.linkedin.com/in/rafael-paroni-43961a301')}><BsLinkedin/></button>
                <button onClick={()=> window.open('https://github.com/RafaelParoni')}><BsGithub/></button>
                <button onClick={()=> window.open('mailto:rafaelparonisilvaa@gmail.com')}><BsEnvelopeFill /></button>
                <button id='ThemeBtn' onClick={() => alternMode()} >
                    <ThemeBtn />
                </button>
            </div>
        </div>
    )
}


export default NavBar;