import Wrapper from "../components/another/wrapper";
import Projects from "./projects/projects";
import Stack from "./stack/stack";
import Top from "./home/top";

const Pages = () => {
    return(
        <div className="w-full" >
            <Wrapper
            id="home"
            className={"bg-rose dark:bg-darkSlate"}
            child={<Top/>}
            />
            <Wrapper
            id="projects"
            className={"bg-fiolet dark:bg-darkBlue"}
            child = {<Projects/>}
            />
            <Wrapper
            id="contact"
            className={"bg-lightBeige dark:bg-darkGrey"}
            child = {<Stack/>}
            />
            
        </div>
    )
}
export default Pages