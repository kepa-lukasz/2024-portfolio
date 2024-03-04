import { MdWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { useState } from "react";
export default function ThemeSwitch() {
    const [light_theme, set_theme] = useState(document.querySelector("html").classList.contains("dark"));
    const change_theme = () => {
        set_theme(!light_theme)
        document.querySelector("html").classList.toggle("dark")
    }
    return (
        <div className="switch-con" onClick={change_theme}>

            <div className="switch dark:bg-lightGrey bg-lemon rounded">
                <div >
                    <div className="switch1 dark:bg-lightGrey bg-lightLemon"></div>
                    <div className="switch2  dark:bg-darkSlate  bg-lemon"></div>
                </div>
                <div className="sun">
                    <MdWbSunny className={!(document.querySelector("html").classList.contains("dark")) ? "sun-show" : "sun-hide"} />
                </div>

                <div className="moon dark:text-white">
                    <LuMoonStar className={(document.querySelector("html").classList.contains("dark")) ? "moon-show" : "moon-hide"} />
                </div>

            </div>
        </div>
    )
}