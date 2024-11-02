import { useState } from "react"
import axios from "axios"

import { BsGithub, BsBrowserChrome, BsStarFill, BsCupFill   } from "react-icons/bs";

function Projetos(){

    const [List, setList] = useState([])

    async function SearchRepositorios(){
        try {
            const options = {
            method: 'GET',
            url: 'https://api.github.com/users/RafaelParoni/repos' // url: `https://api.github.com/repos/RafaelParoni/${NameProjeto}` // 'https://api.github.com/users/RafaelParoni/repos'
            } 
            const results = await axios.request(options)
            var TecsList = results.data
    
            setList(TecsList)
        }catch{
            setList(['Not found'])
        }
    }

    function setReposTecList(){
        if(List.length < 1){
            SearchRepositorios()
        }
    }
    setReposTecList()

    function GenerateListResp({item, index}){
        console.log(item)
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
        data = data.slice(0,10)
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

    return (
        <div className="projetos">
            <div className="desq">

            </div>
            <div className="repositorios">
                <h3 style={{textAlign: 'center'}}>Projetos no Github <BsGithub/></h3>
                {List.map((List, index) => <GenerateListResp item={List} index={index} />)}
            </div>
        </div>
    )
}



export default Projetos