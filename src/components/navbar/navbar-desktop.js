
import AtomButton from "../another/atom-button"
import './navbar-styles.css'
import Wrapper from "../another/wrapper"
import ThemeSwitch from "./theme-switch";
import { Link } from "react-router-dom";


export default function NavbarDesktop() {


    return (
        <nav className="w-full dark:bg-darkSlate bg-rose " style={{ height: "70px" }}>
            
            <Wrapper
                classList="dark:bg-darkSlate bg-rose  "
                child={
                    <div className="flex justify-between  w-full" style={{maxWidth: "2100px"}}>

                        <div className=" nav-img ps-10 flex dark:text-white ">
                            <Link to="/">
                                <img src={require("../../images/logo.png")} />
                            </Link>
                            

                        </div>
                        <div className=" flex justify-center flex-wrap pt-2 gap-5">
                            <div >
                                <Link to="/">

                                    <AtomButton
                                        shadow="bg-black dark:bg-white "
                                        border="bg-rose dark:bg-darkSlate "
                                        className="dark:text-white bg-rose dark:bg-darkSlate "
                                        text="Home" />
                                </Link>
                            </div>
                            <div>
                                <AtomButton
                                    shadow="bg-black dark:bg-white "
                                    border="bg-rose dark:bg-darkSlate "
                                    className="dark:text-white bg-rose dark:bg-darkSlate "
                                    text="Co robię?" />
                            </div>
                            <div >
                                <AtomButton
                                    shadow="bg-black dark:bg-white "
                                    border="bg-rose dark:bg-darkSlate "
                                    className="dark:text-white bg-rose dark:bg-darkSlate "
                                    text="Kontakt" />
                            </div>
                            <div >
                                <Link to="/colors">
                                    <AtomButton
                                        shadow="bg-black dark:bg-white "
                                        border="bg-rose dark:bg-darkSlate "
                                        className="dark:text-white bg-rose dark:bg-darkSlate "
                                        text="Kolory" />
                                </Link>
                            </div>
                            
                        </div>
                        <div className="flex justify-end">
                            <ThemeSwitch />
                        </div>

                    </div>
                }
            />
        </nav>
    )
}