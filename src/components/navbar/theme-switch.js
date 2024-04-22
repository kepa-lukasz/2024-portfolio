import { MdWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { useState } from "react";
const ThemeSwitch = () => {

    const [light_theme, set_theme] = useState(!document.querySelector("html").classList.contains("dark"));


    const change_theme = () => {
        document.querySelector("html").classList.toggle("dark")
        set_theme(!light_theme)
    }
    return (
        <div className="switch-con" onClick={change_theme}>

            <div className="switch dark:bg-lightGrey bg-lemon rounded">
                <div >
                    <div className="switch1 dark:bg-lightGrey bg-lightLemon"></div>
                    <div className="switch2  dark:bg-darkSlate  bg-lemon"></div>
                </div>
                <div className="sun dark:text-lightGrey">
                    <MdWbSunny 
                    />
                </div>

                <div className="moon dark:text-white text-lemon">
                    <LuMoonStar  />
                </div>

            </div>
        </div>
    )
}
export default ThemeSwitch