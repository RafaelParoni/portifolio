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

   function PageRedirect(page){
        if(page === 'projetos'){
            window.location = `/projetos`
        }else if(page === 'sobre'){
            window.location = `/sobre`
        }else{
            window.location = `/curriculo`
        } 
    }

    return (
        <div className="Btns">
            <button onClick={()=> PageRedirect('projetos')} className="Btn"><strong>Projetos</strong></button>
            <button onClick={()=> PageRedirect('sobre')}className="Btn"><strong>Sobre</strong></button>
            <button onClick={()=> PageRedirect('curriculo')}className="Btn"><strong>Curriculo</strong></button>
        </div>
    )
}

export default ProjetosButton