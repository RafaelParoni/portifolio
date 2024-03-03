import "./../Sobre.css"
import Logo from './../../../icons/favicon.ico'

function Information(){
    return(
        <div className="SobreInformation">
            <img alt="IconImage" src={Logo}/>
            <p>
                Meu nome é Rafael Paroni, Sou um rapaz que estuda desenvolvimento web nas horas livres, estou atualmente na Universidade Paulista - Unip
            </p>
        </div>
    )
}

export default Information;