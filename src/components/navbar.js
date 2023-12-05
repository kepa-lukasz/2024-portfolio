
import AtomButton from "./atom-button"
import './components.css'
import Wrapper from "./wrapper"
export default function Navbar() {
    return (
        <nav className="w-full dark:bg-darkSlate bg-rose " style={{ height: "200px" }}>
            <Wrapper
                classList="dark:bg-darkSlate bg-rose "
                child={
                    <div className="w-full h-full flex justify-center content-end">
                        <AtomButton 
                        shadow="bg-lightPink dark:bg-white "
                        border="bg-fiolet dark:bg-darkBlue "
                        onClick={()=>{document.querySelector("html").classList.toggle("dark")}} 
                        className="text-white bg-fiolet dark:bg-darkBlue" 
                        text="okej " />
                        
                    </div>
                }
            />
        </nav>
    )
}