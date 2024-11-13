import { useState } from "react"
import axios from "axios"

import { BsGithub, BsPuzzle, BsChevronCompactLeft, BsChevronCompactRight, BsBrowserChrome, BsStarFill, BsCupFill, BsFillCloudyFill } from "react-icons/bs";

function Projetos(){

    const [Projetos, setProjetos] = useState([])
    const [ProjetoDestaque, setProjetoDestaque] = useState([])

    const languagensColors = {
        'css': '#33A9DC',
        'html': '#F16529',
        'javascript': '#F0DB4F',
        'react-js': '#61DAFB',
        'node-js': '#54A345',
        'php': '#33A9DC',
        'python': '#407EAF',
        'mysql': '#094E6C',
        'firebase': '#FFCA28',
        'axios': '#5A29E4',
        'npm': '#CB3837',
        'socket-io': '#e3e3e3',
        'java': '#0877BB',
        'Kotlin': '#F98D13',
        'c': '#646DC5',
        'c++': '#085E9F',
        'c#': '#9F559A',

    }

    async function SearchRepositorios(){
        try {
        
            const token = process.env.REACT_APP_GITHUB_TOKEN;

            const results = await axios.get('https://api.github.com/users/RafaelParoni/repos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            var TecsList = results.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
            setProjetos(TecsList)
            
            var i = 0
            for(i in results.data){
                if(results.data[i].topics.length > 0){
                    var x = 0
                    for(x in results.data[i].topics){
                        if(results.data[i].topics[x] === 'destaques'){

                            var description = results.data[i].description
                            description = description.slice(0,100) + '...'

                            var data = results.data[i].updated_at
                            data = data.slice(0,10)

                            var y = 0
                            var languagens = <></>
                            for(y in results.data[i].topics){
                                if(results.data[i].topics[y] !== 'destaques'){
                                    languagens = <>{languagens} <span style={{backgroundColor: languagensColors[results.data[i].topics[y]]}} className="languagens">{results.data[i].topics[y]}</span> </>
                                }
                            }

                            var projetoDestaque = {
                                'name': results.data[i].name,
                                'description': description,
                                'html_url': results.data[i].html_url,
                                'homepage': results.data[i].homepage,
                                'data': data,
                                'stargazers_count': results.data[i].stargazers_count,   
                                'languagens': languagens,
                                'id': results.data[i].id
                            }
                            setProjetoDestaque(projetoDestaque)

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
            var languagens = <></>
            
            var i = 0 
            if(item.topics.length !== 0){
                for(i in item.topics){
                    if(item.topics[i] !== 'destaques'){
                        languagens = <>{languagens} <span style={{backgroundColor: languagensColors[item.topics[i]]}} className="languagens">{item.topics[i]}</span></> 
                    }
                }
            }else{
                languagens = <></>
            }
            return (
                <div onClick={()=> SearchRepositorioInfo(item.name)}  key={item.id} className="rep">
                    <h3 style={{margin: '0px'}}><span style={{display: 'none'}} id={item.id} ><BsStarFill/></span>{item.name}</h3>
                    <span>{description}</span>
                    <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><BsCupFill /> Links:</span>
                    <div className="links">
                        <a href={item.html_url} target="noreferrer"><BsGithub/></a>
                        <a href={item.homepage} target="noreferrer"><BsBrowserChrome/></a>
                    </div>
                    <span > <BsStarFill color="#ffff00"/>: {item.stargazers_count}  <BsFillCloudyFill />: {languagens} </span>
                    <span className="last-updata"> Ultima atualização: {data} </span> 
                </div>
            )
        }
        
    }

    async function SearchRepositorioInfo(name){

        if(name !== undefined){
            try {
                const token = process.env.REACT_APP_GITHUB_TOKEN;

                const repositorioResults = await axios.get(`https://api.github.com/repos/RafaelParoni/${name}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
        
                const repositorio = repositorioResults.data
                
    
                var item = {
                    'nome': repositorio.name,
                    'id': repositorio.id,
                    'github': repositorio.html_url,
                    'site': repositorio.homepage,
                    'linguagem': repositorio.language,
                    'data': repositorio.created_at.slice(0,10),
                    'favoritos': repositorio.stargazers_count,
                    'views': repositorio.watchers_count,
                    'description': repositorio.description,
                    'tecnologias': repositorio.topics,
                    'viewExemple': '',
                }
    
             
    
                const releasesResult = await axios.get(`https://api.github.com/repos/RafaelParoni/${name}/releases`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
           
                const releases = releasesResult.data
                var i = 0
                var views = []
                for ( i in releases){
                    views[i] = releases[i].body
                }
    
                item['viewExemple'] = views
    
                ViewProjeto(name, item)
            }catch(error){
                console.error(error)
            }
        }
        
    }
    SearchRepositorioInfo(ProjetoDestaque.name)

    var slide = []
    var slideAtual = 'view1'

    function ViewProjeto(name, item){

        if(item.id !== document.getElementById('valueID').value){
            if(document.getElementById('valueID').value !== ''){
                document.getElementById(document.getElementById('valueID').value).style.display= 'none'
                document.getElementById(item.id).style.display = 'inline'
            }
        }

        if(slide.length !== 0){
            var y= 0
            while(y < slide.length){
                document.getElementById(`view${y+1}`).remove()
                y++
            }
            slide = []
        }
        setTimeout(()=> {
            document.getElementById("tecnologiasBody").innerHTML = ''
            document.querySelector('.titleProjeto').innerHTML = name
            document.querySelector('.descriptionProjeto').innerHTML = item.description
            document.getElementById('valueID').value = item.id
            document.querySelector('.dataUptada').innerHTML = `ultima atualização: ${item.data}`

            
    
            let body = document.getElementById("viewBody")

            if(item.viewExemple.length !== 0){
                if(item.viewExemple.length === 1){
                    document.getElementById('btnView1').style.display = 'none'
                    document.getElementById('btnView2').style.display = 'none'
                }else{
                    document.getElementById('btnView1').style.display = 'flex'
                    document.getElementById('btnView2').style.display = 'flex'
                }
                document.querySelector('.viewProjeto').style.display = 'flex'
                let viewDiv;
  
                var style;
                var i = 0;
                var x = 0
                while(i < item.viewExemple.length){
                    if(i === 0){
                        style = 'flex'
                    }else{
                        style = 'none'
                    }
                    x = i + 1
                    if(item.viewExemple[i].includes('youtube')){
                        viewDiv = document.createElement("iframe");
                        viewDiv.style.display = style
                        viewDiv.title = `youtube-video${x}`
                        viewDiv.id = 'view' + x
                        viewDiv.width = 427
                        viewDiv.height = 240
                        viewDiv.src = item.viewExemple[i]
                    }else{
                        viewDiv = document.createElement("img");
                        viewDiv.style.display = style
                        viewDiv.id = 'view' + x
                        viewDiv.alt = `exemple-img-${x}`
                        viewDiv.src = item.viewExemple[i]
    
                    }
                    body.appendChild(viewDiv);
                    slide.push(`view${x}`)

                    

                    i ++
                }
            }else{
                document.querySelector('.viewProjeto').style.display = 'none'
            }

            var t = 0
            var languagens = <></>

            let tecBody = document.getElementById("tecnologiasBody")
            let topicDiv;

            for (t  in item.tecnologias){
                if(item.tecnologias[t] !== 'destaques'){
                    topicDiv = document.createElement("span");
                    topicDiv.innerHTML = item.tecnologias[t]
                    topicDiv.style.backgroundColor = languagensColors[item.tecnologias[t]]
                    
                    tecBody.appendChild(topicDiv);
                   // languagens = <>{languagens} <span style={{backgroundColor: languagensColors[item.tecnologias[t]]}} className="languagens">{item.tecnologias[t]}</span> </>
                }
            }

            
            console.log(languagens)
        },100)
        

    }

    function SlideFunction(type){
        var index;
        var nextSlide;
        if(type === 'right'){
            if(slideAtual !== slide[slide.length -1]){
                document.getElementById(`${slideAtual}`).style.display = 'none'
                index = slide.indexOf(slideAtual)
                nextSlide = index + 1
                slideAtual = slide[nextSlide]
                document.getElementById(`${slideAtual}`).style.display = 'flex'
            }else{
                document.getElementById(`${slideAtual}`).style.display = 'none'
                slideAtual = slide[0]
                document.getElementById(`${slideAtual}`).style.display = 'flex'
            }
        }else if(type === 'left'){
            if(slideAtual !== slide[0]){
                document.getElementById(`${slideAtual}`).style.display = 'none'
                index = slide.indexOf(slideAtual)
                nextSlide = index - 1
                slideAtual = slide[nextSlide]
                document.getElementById(`${slideAtual}`).style.display = 'flex'
            }else{
                document.getElementById(`${slideAtual}`).style.display = 'none'
                slideAtual = slide[slide.length -1]
                document.getElementById(`${slideAtual}`).style.display = 'flex'
            }
        }

        
    }



    

    return (
        <div className="projetosMain">
            <h2 style={{textAlign: 'center'}}> <BsPuzzle /> Projetos</h2>
            <div className="projetos">
                <div className="desq">
                    <div className="tagDestaque"><span><BsStarFill/> Destaque</span></div>
                    {Object.keys(ProjetoDestaque).length === 0 && (
                        <div className="projetoDestaque">
                                
                        </div>
                    )}
                    {Object.keys(ProjetoDestaque).length > 0 && (
                        <div id="projetoDestaque" className="projetoDestaque">
                                <h1  className="titleProjeto">teste</h1>
                                <div className="descriptionProjeto">
                                    descriptionProjeto
                                </div>
                                <div className="viewProjeto">
                                    <button id="btnView1" onClick={()=> SlideFunction('left')}><BsChevronCompactLeft /></button>
                                        <div id="viewBody">

                                        </div>
                                    <button id="btnView2"  onClick={()=> SlideFunction('right')}><BsChevronCompactRight/></button>
                                </div>
                                
                                <div className="infoProjeto">
                                    <div className="links">
                                        <a href="dada" target="noreferrer"><BsGithub/></a>
                                        <a href="dada" target="noreferrer"><BsBrowserChrome/></a>
                                    </div>
                                    <div id="tecnologiasBody"  className="tecnologias"></div>
                                    
                                </div>
                                <div className="dataUptada"></div>
                                <input type="hidden" id="valueID" value=''/>
                        </div>
                    )}
                </div>
                <div className="repositorios">
                    <div  onClick={()=> SearchRepositorioInfo(ProjetoDestaque.name)}  className="rep">
                        
                        <h3 style={{margin: '0px'}}> <span id={ProjetoDestaque.id} ><BsStarFill/></span> {ProjetoDestaque.name} </h3>
                        <span>{ProjetoDestaque.description}...</span>
                        <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><BsCupFill /> Links:</span>
                        <div className="links">
                            <a href={ProjetoDestaque.html_url} target="noreferrer"><BsGithub/></a>
                            <a href={ProjetoDestaque.homepage} target="noreferrer"><BsBrowserChrome/></a>
                        </div>
                        <span > <BsStarFill color="#ffff00"/>: {ProjetoDestaque.stargazers_count}  <BsFillCloudyFill />: {ProjetoDestaque.languagens}  </span>
                        <span className="last-updata"> Ultima atualização: {ProjetoDestaque.data} </span> 
                    </div>
                    {Projetos.map((Projetos, index) => <GenerateListResp item={Projetos} index={index} />)}
                    {Object.keys(Projetos).length === 0 && (
                        <> teste </>
                    )}
                </div>
            </div>
        </div>
    )
}



export default Projetos