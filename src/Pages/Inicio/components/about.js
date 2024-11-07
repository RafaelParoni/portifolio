import { BsEnvelopeFill, BsGithub, BsAt, BsLinkedin, BsInfoCircle, BsFillShareFill, BsInstagram, BsWhatsapp, BsLink45Deg  } from "react-icons/bs";
import Icon from './../../../icons/favicon.ico'
import axios from "axios";


function About(){


    async function ProjetcsLen(){
        const options = {
        method: 'GET',
        url: 'https://api.github.com/users/RafaelParoni/repos' // url: `https://api.github.com/repos/RafaelParoni/${NameProjeto}` // 'https://api.github.com/users/RafaelParoni/repos'
        } 
        const results = await axios.request(options)

        document.getElementById('QuantProjetos').innerHTML = results.data.length
    }
    ProjetcsLen()

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
        </>
    )
}


export default About;