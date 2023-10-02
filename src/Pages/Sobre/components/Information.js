import "./../Sobre.css"
import Logo from './../../../icons/favicon.ico'

function Information(){
    return(
        <div className="SobreInformation">
            <img alt="IconImage" src={Logo}/>
            <p>
                Meu nome é Rafael Paroni, Sou um rapaz que estuda desenvolvimento web nas horas livres e pretende trabalhar nesta área, <br/> Onde trabalho com sites e bancos de dados,
                Atualmente tenho 17 anos.
            </p>
        </div>
    )
}

export default Information;