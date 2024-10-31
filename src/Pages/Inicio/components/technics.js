import axios from "axios"
import { useState } from "react"

function Technics(){

    const [List, setList] = useState([])

    async function SearchTecs(){
        const options = {
        method: 'GET',
        url: 'https://api.github.com/users/RafaelParoni/repos' // url: `https://api.github.com/repos/RafaelParoni/${NameProjeto}` // 'https://api.github.com/users/RafaelParoni/repos'
        } 
        const results = await axios.request(options)
        var TecsList = []
        var x = 0
        while(x < results.data.length){
            var i = 0
            for(i in results.data[x].topics){
                if(TecsList.includes(results.data[x].topics[i]) === false){
                    TecsList.push(results.data[x].topics[i])
                }
            }
            x++
        }

        setList(TecsList)
    }

    function setReposTecList(){
        if(List.length < 1){
            SearchTecs()
        }
    }
    setReposTecList()

    const TecsImgLinks = {
        'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        'react-js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        'node-js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
        'php': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
        'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        'mysql': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        'firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
        'axios': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg',
        'npm': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
        'socket-io': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg ',
        'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        'Kotlin': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
        'c': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
        'c++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
        'c#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    }

    function GenerateListTecs({item, index}){
        return (
            <div key={index}><span>{item}</span><img alt={item} src={TecsImgLinks[item]} /></div>
        )
    }

    

    return(
        <>
        <div className="tec">
            <h2>Tecnologias</h2>
            <div className="tec-list">
                {List.map((List, index) => <GenerateListTecs item={List} index={index} />)}
            </div>
        </div>
        </>
    )
}

export default Technics;