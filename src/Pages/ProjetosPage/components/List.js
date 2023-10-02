import { useState } from "react";
import "./../Projetos.css"
import axios from "axios";

function ListProjetoList(){
   // const [reposLenght, SetLenghtRepos] = useState(false)
    const [reposInfo, SetInfoRepos] = useState({})
    const [TotalProjetos, SetTotalProjetos] = useState('')
    var list = []
    var i = 0
    var DataUpdate = ''
    var CuteDataUpdata = ''
    async function SearchRepos(){
        const options = {
            method: 'GET',
            url: 'https://api.github.com/users/RafaelParoni/repos'
        } 
        if(Object.keys(reposInfo).length  > 0){
            return
        }
        const results = await axios.request(options)
        var ProjetcId = 0
        while(i < results.data.length){
            if(results.data[i].stargazers_count === 1){
                DataUpdate = ''
                DataUpdate = results.data[i].updated_at
                CuteDataUpdata = DataUpdate.indexOf('T')
                DataUpdate = DataUpdate.slice(0, CuteDataUpdata)
                list[ProjetcId] = {name: results.data[i].name, watchers: results.data[i].watchers_count, description: results.data[i].description, updated: DataUpdate}
                ProjetcId = ProjetcId + 1
            }
            i++
        }
        SetTotalProjetos(i)
        SetInfoRepos(list)
        ProjetoBox(reposInfo)
        
    }
    SearchRepos()

    function ProjetoBox({reposInfo}){
        if(reposInfo === undefined){
            return
        }
        return <div onClick={()=> SearchProjeto(reposInfo.name)} className="projetoDiv">
                    <p>{reposInfo.name}</p>
                    <p>{reposInfo.description}</p>
                    <p>Última atualização: {reposInfo.updated} </p>
                </div>
    }
    function SearchProjeto(value){
        window.location = `/projetos/search?p=${value}${window.location.hash}`
    }
    

    return (
        <div className="ListProjeto">
            <p>Projetos em Destaque:</p>
            {Object.keys(reposInfo).length  > 0  &&(
                <>
                    <div>
                        {reposInfo.map((reposInfo, index) => <ProjetoBox reposInfo={reposInfo} />)}
                    </div>
                    <p className="bottomText">Veja todos os {TotalProjetos} projetos em meu (<a href="https://github.com/RafaelParoni?tab=repositories"> Github </a>)</p>
                </>
            )}
            
        </div>
    )
}

export default ListProjetoList;