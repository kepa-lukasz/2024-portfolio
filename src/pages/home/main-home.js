import Wrapper from "../../components/wrapper";
import About from "./about";
import Stack from "./stack";
import Top from "./top";

export default function Home(){
    return(
        <div className="w-full">
            <Wrapper
            className={"bg-rose dark:bg-darkSlate"}
            child={<Top/>}
            />
            <Wrapper
            className={"bg-fiolet dark:bg-darkBlue"}
            child = {<About/>}
            />
            <Wrapper
            className={"bg-lightBeige dark:bg-darkGrey"}
            child = {<Stack/>}
            />
            
        </div>
    )
}