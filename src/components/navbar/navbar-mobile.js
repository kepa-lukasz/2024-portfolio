import ThemeSwitch from "./theme-switch"
import AtomButton from "../another/atom-button"
import { useState } from "react"
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";



export default function NavbarMobile() {
    const [isVisible, setVisibility] = useState(false)
    return (
        <div >
            <div className="bg-rose dark:bg-darkSlate dark:text-white flex justify-end pe-10">
                <div className=" py-2">
                    {
                        (isVisible) ?
                            <IoClose className="icon" onClick={() => { setVisibility(!isVisible) }} style={{ height: "40px", width: "40px" }} />
                            :
                            < TiThMenuOutline className="pt-2 icon" onClick={() => { setVisibility(!isVisible) }} style={{ height: "35px", width: "35px" }} />
                    }

                </div>

            </div>

            <div className={(isVisible) ? "show" : "hidden"} style={{ height: "70px" }} >
                <div className="offcanvas bg-rose dark:bg-darkSlate">
                    <div className="w-full flex mb-5 justify-between">

                        <div className="ps-5 nav-img flex dark:text-white">
                            <img src={require("../../images/logo.png")} />


                        </div>
                        <ThemeSwitch />
                    </div>

                    <div className="w-full flex justify-center" >
                        <div className="w-full flex justify-center">
                            <AtomButton
                                style={{ width: "120px" }}
                                shadow="bg-black dark:bg-white "
                                border="bg-white dark:bg-darkRed "
                                className="w-full dark:text-white bg-white dark:bg-darkRed "
                                text="Home" />
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
                        <div className="w-full flex justify-center">
                            <AtomButton
                                style={{ width: "120px" }}
                                shadow="bg-black dark:bg-white "
                                border="bg-white dark:bg-darkRed "
                                className="px-9 dark:text-white bg-white dark:bg-darkRed "
                                text="Kontakt" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}