import "./projectQuest.css"

import ProjectQuestTitle from "./components/Title";
import ProjectQuestDetails from "./components/details";
function ProjectQuestPage(){

    return (
        <main className="ProjectQuestPage">
            <ProjectQuestTitle/>
            <ProjectQuestDetails/>
        </main>
    )
}

export default ProjectQuestPage;