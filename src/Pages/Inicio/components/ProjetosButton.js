import "./../Inicio.css"

function ProjetosButton(){

    const urlParams = new URLSearchParams(window.location.search);

    const ModeUrl = urlParams.get("m")
    var Mode = 'light'
    async function DedetectMode(){
        if(ModeUrl === 'dark'){
            Mode = 'dark'
        }else{
            Mode = 'light'
        }
    }
   setTimeout( DedetectMode, 100)

   function PageRedirect(){
        if(Mode === 'light'){
            window.location = `/projetos`
        }else{
            window.location = `/projetos?m=${Mode}`
        }
    }

    return (
        <button onClick={PageRedirect} className="Btn-projetos"><strong>Projetos</strong></button>
    )
}

export default ProjetosButton