import { useState } from "react"
import axios from "axios"

import { BsGithub, BsBrowserChrome, BsStarFill, BsCupFill   } from "react-icons/bs";

function Projetos(){

    const [Projetos, setProjetos] = useState([])
    const [ProjetoDestaque, setProjetoDestaque] = useState([])

    async function SearchRepositorios(){
        try {
            const options = {
            method: 'GET',
            url: 'https://api.github.com/users/RafaelParoni/repos' // url: `https://api.github.com/repos/RafaelParoni/${NameProjeto}` // 'https://api.github.com/users/RafaelParoni/repos'
            } 
            const results = await axios.request(options)
            var TecsList = results.data.sort((a, b) => b.stargazers_count - a.stargazers_count);

            setProjetos(TecsList)
            var i = 0
            for(i in results.data){
                if(results.data[i].topics.length > 0){
                    var x = 0
                    for(x in results.data[i].topics){
                        if(results.data[i].topics[x] === 'destaques'){
                            setProjetoDestaque(results.data[i])
                        }
                    }
                }
            }
        }catch{
            setProjetos(['Not found'])
        }
    }

    function setReposTecList(){
        if(Projetos.length < 1){
            SearchRepositorios()
        }
    }
    setReposTecList()

    function GenerateListResp({item, index}){ 
        if(ProjetoDestaque.id === item.id){
            return (<></>)
        }else{
            var description = item.description
            try{
                if(description.length > 25){
                    description = description.slice(0, 70)
                    description = description + '...'
                }
            }catch{
                description = ''
            }
            var data = item.updated_at
            try {
                data = data.slice(0,10)
            }catch{
                data = 'dataError :c'
            }
            return (
                <div key={index} className="rep">
                    <h2 style={{margin: '0px'}}>{item.name}</h2>
                    <span>{description}</span>
                    <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><BsCupFill /> Links:</span>
                    <div className="links">
                        <a href={item.html_url} target="noreferrer"><BsGithub/></a>
                        <a href={item.homepage} target="noreferrer"><BsBrowserChrome/></a>
                    </div>
                    <span> <BsStarFill color="#ffff00"/>: {item.stargazers_count} -  </span>
                    <span className="last-updata"> Ultima atualização: {data} </span> 
                </div>
            )
        }
        
    }

    return (
        <div className="projetos">
            <div className="desq">
                {Object.keys(ProjetoDestaque).length === 0 && (
                    <h1>NENHUM PROJETO EM DESTAQUE</h1>
                )}
                {Object.keys(ProjetoDestaque).length > 0 && (
                    <div>
                        PROJETO EM DESTAQUE
                    </div>

                )}

            </div>
            <div className="repositorios">
                <h3 style={{textAlign: 'center'}}>Projetos no Github <BsGithub/></h3>
                {Projetos.map((Projetos, index) => <GenerateListResp item={Projetos} index={index} />)}
            </div>
        </div>
    )
}



export default Projetos