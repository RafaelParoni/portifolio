import axios from "axios"
import { useState } from "react"
import errorImg from './../../icons/error_5171.png'
import { BsCpu } from "react-icons/bs";

function Technics(){

    const [List, setList] = useState([])

    async function SearchTecs(){
        try {
            const token = process.env.REACT_APP_GITHUB_TOKEN;

            const results = await axios.get('https://api.github.com/users/RafaelParoni/repos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
   
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
        }catch{
            setList(['Not found'])
        }
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
        'Not found': errorImg,
    }

    function GenerateListTecs({item, index}){
        if(item === 'destaques'){
            return(<></>)
        }else{
            return (
                <div key={index}><span>{item}</span><img alt={item} src={TecsImgLinks[item]} /></div>
            )
        }
    }

    

    return(
        <>
        <div id="tecnologia" className="tec">
            <h2><BsCpu/> Tecnologias</h2>
            <div className="tec-list">
                {List.map((List, index) => <GenerateListTecs item={List} index={index} />)}
            </div>
        </div>
        </>
    )
}

export default Technics;