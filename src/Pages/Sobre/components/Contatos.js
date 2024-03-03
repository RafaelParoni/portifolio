import "./../Sobre.css"
import {FaAddressBook} from 'react-icons/fa6'
import {RiGithubLine, RiInstagramLine, RiLinkedinBoxLine , RiYoutubeLine, RiChromeLine} from 'react-icons/ri'
import Sound from './../../../sounds/copySound.wav'

function Contato(){


    function ContatoLink(value){
        window.open(value)   
    }
    return (
        <div>
            <div className="TitleHabi" id='contato'>
                <h3><FaAddressBook/>Contato</h3>
            </div>
            <div className="TypHabi">
                <button onClick={()=> ContatoLink('https://github.com/RafaelParoni')} className="SocialHabi"><RiGithubLine/></button>
                <button  onClick={()=> ContatoLink('https://www.instagram.com/')} className="SocialHabi"><RiInstagramLine/></button>
                <button onClick={()=> ContatoLink('https://twitter.com/RafaelParoni')}  className="SocialHabi"><RiLinkedinBoxLine  /></button>
                <button onClick={()=> ContatoLink('https://www.youtube.com/channel/UCCjwv7_RJteoSRhbRqFqP-Q')}  className="SocialHabi"><RiYoutubeLine/></button>
                <button  onClick={()=> ContatoLink('https://rafaelparoni.vercel.app/')} className="SocialHabi"><RiChromeLine/></button>
            </div>
        </div>
    )
}

export default Contato;



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