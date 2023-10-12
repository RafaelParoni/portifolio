import "./../Projetos.css"
import axios from "axios";
import { useState } from "react";

import {FaCode, FaSistrix} from 'react-icons/fa6'

function SearchProjeto(){
    const [Repos, SetRepos] = useState({})
    const [Topics , SetTopics] = useState({})
    const [ReposImg, SetReposImg] = useState({})
    const urlParams = new URLSearchParams(window.location.search);
    const NameProjeto = urlParams.get("p")
    var ReposProjeto = {}
    async function SearchRepos(){
        const options = {
        method: 'GET',
        url: `https://api.github.com/repos/RafaelParoni/${NameProjeto}` // 'https://api.github.com/users/RafaelParoni/repos'
        } 
        if(Object.keys(Repos).length > 0){
            return
        }
        const results = await axios.request(options)

        SetTopics(results.data.topics)
        ReposProjeto = {name: results.data.name}
        console.log(results.data)
        SearchReposImg()
        SetRepos(results.data)
    }
    SearchRepos()
    async function SearchReposImg(){
        const ReposImg = {
            method: 'GET',
            url: `https://api.github.com/repos/RafaelParoni/${ReposProjeto.name}/releases#img`
        }
        const results = await axios.request(ReposImg)
        SetReposImg(results.data[0].name)
    }

    function TopicsBox({item}){
        const PHP = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
        const Html = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        const Javascript = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        const Css = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        const Nodejs = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        const MySQL = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        const Python = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        const Reactjs = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        const Firebase = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg'
        const Typescript = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg'
        const Npm = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
        const Discordjs = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg'
        var img = ''

        switch(item){
            case 'html': 
                img = Html  
                break;
            case 'php': 
                img = PHP  
                break;
            case 'javascript': 
                img = Javascript
                break;
            case 'node-js': 
                img = Nodejs
                break;
            case 'mysql': 
                img = MySQL
                break;
            case 'python': 
                img = Python
                break;
            case 'react-js': 
                img = Reactjs
                break;
            case 'css': 
                img = Css
                break;
            case 'firebase': 
                img = Firebase
                break;
            case 'npm': 
                img = Npm
                break;
            case 'discordjs': 
                img = Discordjs
                break;
            case 'typescript': 
                img = Typescript
                break;
            default:
                img = Html
        }
        return <div className="languageSearch">
                    {item}
                    <img alt="language" src={img}  width={100}/>
                </div>
    }
   
    return (
     <div className="SearchProjetoPage">
        {Object.keys(Repos).length > 0 &&(  // Search
            <div className="SearchProjeto">
                <div className="SearchTitle">
                    <h1><a href={Repos.homepage}>{Repos.name}</a><FaSistrix/></h1>
                </div>
                <div className="SearchSubTitle">
                    <h3>{Repos.description} <a href={Repos.html_url}> <FaCode/> GITHUB CODE</a></h3>
                </div>
                <div className="SearchImg">
                    <img  alt="" src={ReposImg}/>
                </div>
                <h3>Tecnologias utilizadas:</h3>
                <div className="languageSearchDiv">
                    {Topics.map((Topics, index) => <TopicsBox item={Topics} />)}
                </div>
            </div> 
        )}
     </div>
    )
}

export default SearchProjeto;