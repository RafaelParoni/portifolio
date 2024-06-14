import "./../Sobre.css"
import Logo from './../../../icons/favicon.ico'

function Information(){
    return(
        <div className="SobreInformation">
            <img alt="IconImage" src={Logo}/>
            <p>
                Estudante de graduação em <b> Ciência da computação </b>  na Universidade Paulista com paixão por desenvolvimento web. <br/>

                Nas horas vagas, me dedico a aprender e aprimorar minhas habilidades em linguagens de programação como HTML, CSS, JavaScript e React.js, além de explorar a conexão com bancos de dados. <br/>
                
                Tenho experiência prática na criação de sites e já desenvolvi [Insira a quantidade] projetos utilizando as tecnologias que domino. <br/>
                
                Sou um profissional proativo, em constante busca por novos desafios e conhecimentos. Acredito na importância do aprendizado contínuo e estou sempre buscando aprimorar minhas habilidades para me tornar um desenvolvedor web completo e bem-sucedido. <br/>
                
                Minhas principais áreas de interesse: <br/>

                <ul>
                  <li>Desenvolvimento web front-end e back-end</li>
                  <li>Criação de sites e interfaces web responsivas</li>
                  <li>Integração com bancos de dados</li>
                  <li>React.js</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ul> <br/>

                Estou aberto a novas oportunidades e desafios na área de desenvolvimento web. <br/>

                Entre em contato comigo para saber mais sobre meus projetos e experiências. <br/>
            </p>
        </div>
    )
}

export default Information;
