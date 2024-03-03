import "./../Sobre.css"
import {FaCode} from 'react-icons/fa6'


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

function Habilidades(){
    return (
        <div>
            <div className="TitleHabi">
                <h3><FaCode/>Tecnologias</h3>
            </div>
            <div className="TypHabi">
                <fieldset className="HabiMaisUtilits">
                    <legend>Mais utilizadas</legend>
                    <div className="languagesHabi">
                        <p>Axios</p>
                        <img alt="Html" src={Axios} />
                    </div>
                    <div className="languagesHabi">
                        <p>Html5</p>
                        <img alt="Html" src={Html} />
                    </div>
                    <div className="languagesHabi">
                        <p>Css</p>
                        <img alt="Css" src={Css} />
                    </div>
                    <div className="languagesHabi">
                        <p>Javascript</p>
                        <img alt="Javascript" src={Javascript} />
                    </div>
                    <div className="languagesHabi">
                        <p>React.js</p>
                        <img alt="React.js" src={Reactjs} />
                    </div>
                    <div className="languagesHabi">
                        <p>Node.js</p>
                        <img alt="Node.js" src={Nodejs} />
                    </div>
                    <div className="languagesHabi">
                        <p>MySQL</p>
                        <img alt="MySQL" src={MySQL} />
                    </div>
                    <div className="languagesHabi">
                        <p>Npm </p>
                        <img alt="Npm" src={Npm} />
                    </div>
                    <div className="languagesHabi">
                        <p>Firebase</p>
                        <img alt="Firebase" src={Firebase} />
                    </div>
                    <span><a href="/projetos">Meus Projetos!</a></span>
                </fieldset>
                <div className="languagesHabi">
                    <p>PHP</p>
                    <img alt="PHP" src={PHP} />
                </div>
                <div className="languagesHabi">
                    <p>Python</p>
                    <img alt="Python" src={Python} />
                </div>
                <div className="languagesHabi">
                    <p>Discord.js</p>
                    <img alt="Discordjs" src={Discordjs} />
                </div>
                <div className="languagesHabi">
                    <p>Typescript</p>
                    <img alt="Typescript" src={Typescript} />
                </div>
            </div>
        </div>
    )
}

export default Habilidades;



/* <div className="progressDiv">
        <p>Javascript</p>
        <div class="progress-bar " id="javascript" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">50%</div>
    </div>
    #javascript{
        background: 
        radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(rgb(251, 255, 0) 50%, rgb(255, 255, 255) 0);    
    }
    .progress-bar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .progressDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
*/