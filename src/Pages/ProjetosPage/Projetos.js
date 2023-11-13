import "./Projetos.css"

import ProjetosList from './components/ProjetosList';
import NotificationFunction from "../../components/Notification/Notification";

function ProjetosPage(){

    return (
        <div>
            <ProjetosList/>
            <NotificationFunction/>
        </div>
    )
}

export default ProjetosPage;