import "./../Projetos.css"

import TitleProjetoList from "./Title";
import ListProjetoList from "./List";

function ProjetosList(){
    return (
        <div className="ProjetoListPage">
            <TitleProjetoList/>
            <ListProjetoList/>
        </div>
    )
}

export default ProjetosList;