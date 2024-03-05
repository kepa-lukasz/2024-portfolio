import ProjectCard from "./projectmodule";

const Projects = () =>{
    return(
        <div className="d-flex flex-wrap justify-content-center">
            <ProjectCard color="rgba(90, 34, 139, 0.6)" name="Techsquare"/>
            <ProjectCard color="rgba(00, 74, 00, 0.6)"  name="Moje stare Portfolio"/>
            <ProjectCard color="rgba(00, 00, 184, 0.6)" name="KLimat-24"/>
            <ProjectCard color="rgba(94,80,63, 0.6)" name="Cel-194"/>
            
        </div>
    )
}
export default Projects