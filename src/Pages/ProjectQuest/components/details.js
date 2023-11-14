import "./../projectQuest.css"



import BasicImg from './Icons/Basic.ico'
import SimplesImg from './Icons/Simples.ico'
import UltraImg from './Icons/Ultra.ico'
function ProjectQuestDetails(){

    return (
        <div className="ProjectQuestPaga-details">
            <div className="ProjectQuestPaga-cardPlane" id="Basic" >
                <div className="CardPlane-Info" style={{backgroundColor: '#0099ff'}}>
                    <img alt="Basic Img" src={BasicImg} />
                    <h2>Básico</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L40,256C80,256,160,256,240,224C320,192,400,128,480,96C560,64,640,64,720,101.3C800,139,880,213,960,234.7C1040,256,1120,224,1200,202.7C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                </div>
                <div className="Descripition">
                    <div>
                        <h4>$45 </h4>
                        <span>|</span>
                        <span>Por página</span>
                    </div>
                    <div><ul>
                        <li id="NotAtictve">Banco de dados</li>
                        <li id="NotAtictve">Paginas Dinamicas</li>
                        <li id="NotAtictve">Javascript</li>
                        <li id="Atictve">Paginas simples</li>
                    </ul></div>
                    <div><button onClick={()=> {window.location = 'https://api.whatsapp.com/send?phone=982087099&text=Gostaria de saber mais sobre a opção Básica do seu site!'}}>Fazer o pedido</button></div>
                    <span>Pedidos feito pelo WhatsApp</span>
                </div>
                
            </div>
            <div className="ProjectQuestPaga-cardPlane" id="Premiun" >
                <div className="CardPlane-Info" style={{backgroundColor: '#29db32'}}>
                    <img alt="Basic Img" src={SimplesImg} />
                    <h2>Simples</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#29db32" fill-opacity="1" d="M0,160L40,149.3C80,139,160,117,240,133.3C320,149,400,203,480,234.7C560,267,640,277,720,277.3C800,277,880,267,960,240C1040,213,1120,171,1200,133.3C1280,96,1360,64,1400,48L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                </div>
                <div className="Descripition">
                    <div >
                        <h4>$65 </h4>
                        <span>|</span>
                        <span>Por página</span>
                    </div>
                    <div><ul>
                        <li id="NotAtictve">Banco de dados</li>
                        <li id="Atictve">Paginas Dinamicas</li>
                        <li id="Atictve">Javascript</li>
                        <li id="Atictve">Paginas complexas</li>
                    </ul></div>
                    <div><button onClick={()=> {window.location = 'https://api.whatsapp.com/send?phone=982087099&text=Gostaria de saber mais sobre a opção Simples  do seu site!'}}>Fazer o pedido</button></div>
                    <span>Pedidos feito pelo WhatsApp</span>
                </div>
                
            </div>
            <div className="ProjectQuestPaga-cardPlane" id="Standard">
                <div  className="CardPlane-Info" style={{backgroundColor: '#5000ca'}}>
                    <img alt="Basic Img" src={UltraImg} />
                    <h2>Ultra</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,256L40,245.3C80,235,160,213,240,218.7C320,224,400,256,480,277.3C560,299,640,309,720,288C800,267,880,213,960,192C1040,171,1120,181,1200,197.3C1280,213,1360,235,1400,245.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
                </div>
                <div className="Descripition">
                    <div >
                        <h4>$85 </h4>
                        <span>|</span>
                        <span>Por página</span>
                    </div>
                    <div><ul>
                        <li id="Atictve">Banco de dados</li>
                        <li id="Atictve">Paginas Dinamicas</li>
                        <li id="Atictve">Javascript</li>
                        <li id="Atictve">Paginas complexas</li>
                    </ul></div>
                    <div><button onClick={()=> {window.location = 'https://api.whatsapp.com/send?phone=982087099&text=Gostaria de saber mais sobre a opção Ultra do seu site!'}}>Fazer o pedido</button></div>
                    <span>Pedidos feito pelo WhatsApp</span>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectQuestDetails;