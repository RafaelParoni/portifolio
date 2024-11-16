import { BsEnvelopeFill, BsGithub, BsChevronCompactDown,BsHandIndex, BsAt, BsLinkedin, BsInfoCircle, BsFillShareFill, BsInstagram, BsWhatsapp, BsLink45Deg  } from "react-icons/bs";
import Icon from './../../icons/favicon.ico'
import axios from "axios"; // get API RESULTS IN projetcsLen

import curriculoUrl from './../../curriculo.pdf'


function About(){


    async function ProjetcsLen(){   
        const token = process.env.REACT_APP_GITHUB_TOKEN;

        try{
            const results = await axios.get('https://api.github.com/users/RafaelParoni/repos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            document.getElementById('QuantProjetos').innerHTML = results.data.length
        }catch(error ){
            console.error(error)
        }
    }
    ProjetcsLen()

    function viewDocPDF(){
        if(document.getElementById('curriculo').style.height === '1000px'){
            document.getElementById("curriculo").style.height = '80px'
            document.getElementById('curriculo-seta').style.transform = 'rotateX(0deg)'
        }else{
            document.getElementById("curriculo").style.height = '1000px'
            document.getElementById('curriculo-seta').style.transform = 'rotateX(180deg)'
        }
    }

    return (
        <>
            <div className="about">
                <img src={Icon} alt="FavIcon" />
                <div className="about-info">
                    <h1><BsAt/>Rafael Paroni Silva</h1>
                    <div>
                        <button aria-label="Copiar link da pagina!" data-balloon-pos="down" onClick={()=> navigator.clipboard.writeText(window.location)}><BsFillShareFill/></button>
                        <button aria-label="LinkeDin!" data-balloon-pos="down" onClick={()=> window.open('https://www.linkedin.com/in/rafael-paroni-43961a301')}><BsLinkedin/></button>
                        <button aria-label="Instagram!" data-balloon-pos="down" onClick={()=> window.open('https://www.instagram.com/rafaelparroni/')}><BsInstagram/></button>
                        <button aria-label="Github!" data-balloon-pos="down" onClick={()=> window.open('https://github.com/RafaelParoni')}><BsGithub/></button>
                        <button aria-label="Mail!" data-balloon-pos="down" onClick={()=> window.open('mailto:rafaelparonisilvaa@gmail.com')}><BsEnvelopeFill/></button>
                        <button aria-label="Whatsapp!" data-balloon-pos="down" onClick={()=> window.open('https://api.whatsapp.com/send?phone=12982087099')}><BsWhatsapp/></button>
                    </div>
                </div>
            </div>
            <div className="about-desc" id="sobre">
                <h2><BsInfoCircle/> Sobre mim</h2>
                <p> 
                    <b>S</b>ou um estudante de graduação em <strong> Ciência da computação </strong> na <strong> <a href="https://www.unip.br/" target="noreferrer"> <BsLink45Deg/>UNIP (Universidade Paulista) </a> </strong> com paixão por desenvolvimento web. <br/> 
                    Nas horas vagas, me dedico a aprender e aprimorar minhas habilidades em linguagens de <br/> programação como HTML, CSS, JavaScript e React.js, além de explorar a conexão com bancos de dados. <br/>
                    Tenho experiência prática na criação de sites e já desenvolvi mais de <a href="https://github.com/RafaelParoni?tab=repositories" target="noreferrer"><strong>  <span id="QuantProjetos"></span> projetos </strong> <BsGithub/></a> utilizando as tecnologias que domino. <br/>
                    Minhas principais áreas de interesse:
                </p>
                <ul>
                    <li>Desenvolvimento web front-end e back-end</li>
                    <li>Criação de sites e interfaces web responsivas</li>
                    <li>Integração com bancos de dados</li>
                    <li>React.js </li>
                    <li>JavaScript, CSS, HTML </li>
                </ul>
                <p>
                    Estou aberto a novas oportunidades e desafios na área de desenvolvimento web.
                    Entre em contato comigo para saber mais sobre meus projetos e experiências.
                </p>

            </div>
            <div id="curriculo" className="about-curriculo">
                <span onClick={(e)=> viewDocPDF()} style={{margin: 0, fontSize: '15px', padding: '0', textAlign: 'left', width: '105%'}}>Click para ver o curriculo!</span>
                <button onClick={(e)=> viewDocPDF()}> 
                    <h2> <BsHandIndex /> Curriculo  </h2>
                    <BsChevronCompactDown size={25} id="curriculo-seta"/>
                </button>
                <embed  src={curriculoUrl} width="800px" height="900px" />
            </div>
        </>
    )
}


export default About;