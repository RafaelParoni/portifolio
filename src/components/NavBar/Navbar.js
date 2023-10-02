import './Navbar.css'
import {MdDarkMode, MdLightMode, MdDensityMedium, MdClear} from 'react-icons/md'
import Logo from './../../icons/favicon.ico'
var Mode = '#light'

function NavBar(){

    Mode = window.location.hash
    async function DedetectMode(){
        var DarkModeBtn = document.getElementById('DarkMode')
        var lightModeBtn = document.getElementById('LightMode')
        var DarkModeBtnMobile = document.getElementById('DarkModeMobile')
        var lightModeBtnMobile = document.getElementById('LightModeMobile')
        var htmlBody = document.getElementById('html')
        if(Mode === '#dark'){
            htmlBody.removeAttribute('class')
            htmlBody.setAttribute('class', 'dark-mode')
            DarkModeBtn.style.display = 'flex'
            lightModeBtn.style.display = 'none'
            DarkModeBtnMobile.style.display = 'flex'
            lightModeBtnMobile.style.display = 'none'
            Mode = '#dark'
        }else{
            htmlBody.removeAttribute('class')
            htmlBody.setAttribute('class', 'light-mode')
            DarkModeBtn.style.display = 'none'
            DarkModeBtnMobile.style.display = 'none'
            lightModeBtn.style.display = 'flex'
            lightModeBtnMobile.style.display = 'flex'
            Mode = '#light'
        }
    }
   setTimeout( DedetectMode, 100)


    function OpenNavbarMobile(el) {
        var Open = document.getElementById('NavbarMobileOpen')
        var Close = document.getElementById('NavbarMobileClose')
        var display = document.getElementById(el).style.display;
        if(display === "none"){
            Open.style.display = 'none'
            Close.style.display = 'flex'
            document.getElementById(el).style.display = 'flex';
        }else if(display === 'flex'){
            Open.style.display = 'flex'
            Close.style.display = 'none'
            document.getElementById(el).style.display = 'none';
        }else{
            Open.style.display = 'none'
            Close.style.display = 'flex'
            document.getElementById(el).style.display = 'flex';
        }
    }
    function ModeScreen(){
        var DarkModeBtn = document.getElementById('DarkMode')
        var lightModeBtn = document.getElementById('LightMode')
        var DarkModeBtnMobile = document.getElementById('DarkModeMobile')
        var lightModeBtnMobile = document.getElementById('LightModeMobile')
        if(Mode === '#light'){
            DarkModeBtn.style.display = 'flex'
            lightModeBtn.style.display = 'none'
            DarkModeBtnMobile.style.display = 'flex'
            lightModeBtnMobile.style.display = 'none'
            Mode = '#dark'
            window.location.hash = Mode
            DedetectMode()
        }else {
            DarkModeBtn.style.display = 'none'
            DarkModeBtnMobile.style.display = 'none'
            lightModeBtn.style.display = 'flex'
            lightModeBtnMobile.style.display = 'flex'
            Mode = '#light'
            window.location.hash = Mode
            DedetectMode()
        }
        
    }
    function PageRedirect(value){
        if(Mode === 'light'){
            window.location = `${value}`            
        }else{
            window.location = `${value}${Mode}`
        }
    }

    return(
        <div className='Navbar'>
            <div className='NavbarLogo'>
                    <img alt='tes' src={Logo}/> 
                    <a href='https://www.instagram.com/rafaelparroni/'><b>Rafael Paroni Silva</b></a>
            </div>
            <div className='NavbarHref '>
                <button onClick={()=>PageRedirect('/inicio')} ><b>Inicio</b></button>
                <button onClick={()=>PageRedirect('/sobre')}><b>Sobre</b></button>
                <button onClick={()=>PageRedirect('/projetos')}><b>Projetos</b></button>
                <button onClick={()=>PageRedirect('/sobre')}><b>Contato</b></button>
                <button onClick={()=> ModeScreen()}><span id='DarkMode'><MdDarkMode size={20}/></span><span id='LightMode'><MdLightMode size={20}/></span></button>
            </div>
            <div className='NavbarHref Mobile'>
                <button  onClick={()=> OpenNavbarMobile('NavbarMobile')}><MdDensityMedium id='NavbarMobileOpen' size={25}/> <MdClear id='NavbarMobileClose' size={25}/></button>
                <div id='NavbarMobile'  className='ScreenMobileNavbar'>
                    <button  className='BtnMobileNavbar' onClick={()=>PageRedirect('/inicio')}><b>Inicio</b></button>
                    <button className='BtnMobileNavbar' onClick={()=>PageRedirect('/sobre')}><b>Sobre</b></button>
                    <button className='BtnMobileNavbar' onClick={()=>PageRedirect('/projetos')}><b>Projetos</b></button>
                    <button className='BtnMobileNavbar' onClick={()=>PageRedirect('/sobre')}><b>Contato</b></button>
                    <button className='BtnMobileNavbar' onClick={()=> ModeScreen()}><span id='DarkModeMobile'><MdDarkMode size={20}/></span><span id='LightModeMobile'><MdLightMode size={20}/></span></button>
                </div>
            </div>
        </div>
    )
}


export default NavBar;