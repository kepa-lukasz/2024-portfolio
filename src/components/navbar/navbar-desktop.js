
import AtomButton from "../another/atom-button"
import './navbar-styles.css'
import Wrapper from "../another/wrapper"
import ThemeSwitch from "./theme-switch";



export default function NavbarDesktop() {


    return (
        <nav className="w-full dark:bg-darkSlate bg-rose " style={{ height: "70px" }}>
            <Wrapper
                classList="dark:bg-darkSlate bg-rose  "
                child={
                    <div className="flex justify-between">

                        <div className=" nav-img ps-10 flex dark:text-white ">
                            <img src={require("../../images/logo.png")} />

                            <span className="ps-1 pt-4 text-2xl font-bold">Łukasz</span>
                            <span className="pt-4 text-2xl font-thin">Kępa</span>

                        </div>
                        <div className=" flex justify-center flex-wrap pt-2 gap-5">
                            <div >
                                <AtomButton
                                    shadow="bg-black dark:bg-white "
                                    border="bg-rose dark:bg-darkSlate "
                                    className="dark:text-white bg-rose dark:bg-darkSlate "
                                    text="Home" />
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
                        </div>
                        <div className="flex justify-end pe-10">
                            <ThemeSwitch />
                        </div>

                    </div>
                }
            />
        </nav>
    )
}