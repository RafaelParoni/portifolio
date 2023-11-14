import "./../projectQuest.css"

import {FaRegHandPointDown} from 'react-icons/fa6'
import TitleImg from './Icons/Title.ico'

function ProjectQuestTitle(){

    return (
        <div className="ProjectQuestPaga-top">
            <div className="content">
                <h1>Quest Site</h1>
                <h4>faça seu pedido de site através das opções abaixo <FaRegHandPointDown/></h4>
            </div>
            <div className="PreviewContent">
                <img alt="" src={TitleImg}/>
            </div>
        </div>
    )
}

export default ProjectQuestTitle;