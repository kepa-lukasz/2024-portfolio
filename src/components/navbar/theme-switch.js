import { MdWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { useState } from "react";
export default function ThemeSwitch(){
    const [light_theme, set_theme] = useState(true);
    const change_theme = () => {
        set_theme(!light_theme)
        document.querySelector("html").classList.toggle("dark")
    }
    return (
        <div className="switch dark:bg-black bg-lemon rounded"
            onClick={change_theme}
        >

            <div >
                <div className="switch1 dark:bg-black bg-lightLemon"></div>
                <div className="switch2 dark:bg-darkGrey bg-lemon"></div>
            </div>


            <div className="sun">
                <MdWbSunny className={(light_theme) ? "sun-show" : "sun-hide"} />
            </div>

            <div className="moon dark:text-white">
                <LuMoonStar className={(!light_theme) ? "moon-show" : "moon-hide"} />
            </div>

        </div>
    )
}