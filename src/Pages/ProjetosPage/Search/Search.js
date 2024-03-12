import "./../Projetos.css"
import axios from "axios";
import { useState } from "react";

import {FaCode, FaSistrix} from 'react-icons/fa6'


var exempleType = 'img'

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
        var exempleObj = {}
        if(results.data.length > 1){
            console.log(results)
            exempleType = 'duelDisplay'
            exempleObj = {
                'video': results.data[0].body,
                'titleVideo': results.data[0].name,
                'img': results.data[1].body,
                'titleImg': results.data[1].name,
            }
        }else{
            exempleType = results.data[0].tag_name
            if(results.data[0].tag_name === 'img'){
                if(results.data[0].body === ''){
                    exempleObj = {
                        'img': results.data[0].name,
                        'titleImg': results.data[0].name,
                    }
                }else{
                    exempleObj = {
                        'img': results.data[0].body,
                        'titleImg': results.data[0].name,
                    }
                }
            }else{
                exempleObj = {
                    'video': results.data[0].body,
                    'titleVideo': results.data[0].name,
                }
            }
        }
        SetReposImg(exempleObj)
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
        const Axios = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg'
        const socketio = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg'
        var img = ''
        console.log(item)

        switch(item){
            case 'html5': 
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
            case 'axios': 
                img = Axios
                break;
            case 'socket-io': 
                img = socketio
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
                <div className="SearchExemple">
                    {exempleType === 'img' && (
                        <img alt={ReposImg.titleImg} src={ReposImg.img}/>
                    )}
                    {exempleType === 'video' && (
                        <iframe title={ReposImg.titleVideo} src={ReposImg.video}></iframe>
                    )}
                    {exempleType === 'duelDisplay' && (
                        <>
                            <iframe allowFullScreen title={ReposImg.titleVideo} autoplay src={ReposImg.video}/>
                            <img  alt={ReposImg.titleImg} src={ReposImg.img}/>
                        </>
                    )}
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