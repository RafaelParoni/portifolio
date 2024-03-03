import "./Sobre.css"
import Title from "./components/Title";
import Information from "./components/Information";
import Habilidades from "./components/habilidades";
import Contato from "./components/Contatos";


function Sobre(){
    setTimeout(function(){
        if(window.location.pathname === '/contato'){
            window.scrollTo({ top: 1000, behavior: 'smooth'})
        }
    })
    return(
        <div className="PageSobre">
            <Title/>
            <Information/>
            <div className="ExtraInfomartionSobre">
                <Habilidades/>
                <Contato/>
            </div>
        </div>
        
    )
}

export default Sobre;