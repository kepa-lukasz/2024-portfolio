import ThemeSwitch from "./theme-switch"
import AtomButton from "../another/atom-button"
import { useState } from "react"
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function NavbarMobile() {

    const [isVisible, setVisibility] = useState(false)

    const changeVisibility = () => {
        document.body.style.overflowY = (isVisible) ? "scroll" : "hidden";
        setVisibility(!isVisible)
    }
    return (
        <div className="bg-rose dark:bg-darkSlate w-full">
            <div className="w-full dark:text-white flex justify-between" style={{ height: "70px" }}>

                <div className="ps-7 nav-img flex dark:text-white">
                    <Link to="" onClick={()=>{ setVisibility(false) ; document.body.style.overflow = "scroll"}}>
                        <img src={require("../../images/logo.png")} />
                    </Link>
                </div>
                <div className=" py-2 flex">
                    <div className="icon-holder bg-rose dark:bg-darkSlate bg-darkRed"></div>
                    
                        
                            <IoClose className={(isVisible)? "icon show-icon" : "icon hide-icon"} onClick={changeVisibility} />
                            
                            < TiThMenuOutline className={(isVisible)? "icon hide-icon" : "icon show-icon"} onClick={changeVisibility}  />
                    
                    <div className="icon-holder bg-rose dark:bg-darkSlate"></div>

                </div>

            </div>
            <div className="mobile-nav-con w-full">


                <div className={(isVisible) ? "show" : "hide"}  >
                    <div className="offcanvas bg-rose dark:bg-darkSlate">
                        <div className=" flex mb-5 justify-end pe-7">

                            <ThemeSwitch />
                        </div>

                        <div className="w-full flex justify-center" >
                            <div className="w-full flex justify-center">
                                <Link to="" onClick={changeVisibility}>
                                    <AtomButton
                                        style={{ width: "120px" }}
                                        shadow="bg-black dark:bg-white "
                                        border="bg-white dark:bg-darkRed "
                                        className="w-full dark:text-white bg-white dark:bg-darkRed "
                                        text="Home" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <div className="w-full flex justify-center my-5">
                                <AtomButton
                                    style={{ width: "120px" }}
                                    shadow="bg-black dark:bg-white "
                                    border="bg-white dark:bg-darkRed "
                                    className=" px-7 dark:text-white bg-white dark:bg-darkRed "
                                    text="Co&nbsp;robię?" />
                            </div>
                        </div>
                        <div className="w-full flex justify-center" >
                            <div className="w-full flex justify-center ">
                                <AtomButton
                                    style={{ width: "120px" }}
                                    shadow="bg-black dark:bg-white "
                                    border="bg-white dark:bg-darkRed "
                                    className="px-9 dark:text-white bg-white dark:bg-darkRed "
                                    text="Kontakt" />
                            </div>
                        </div>
                        <div className="w-full flex justify-center" >
                            <div className="w-full flex justify-center my-5">
                                <Link to="colors" onClick={changeVisibility}>
                                    <AtomButton
                                        style={{ width: "120px" }}
                                        shadow="bg-black dark:bg-white "
                                        border="bg-white dark:bg-darkRed "
                                        className="px-9 dark:text-white bg-white dark:bg-darkRed "
                                        text="Colors" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}