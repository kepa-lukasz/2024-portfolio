import ProgressBar from "../../components/another/progress-bar";

import { FaBootstrap, FaReact, FaUniversalAccess } from "react-icons/fa6";
import { SiPhp, SiMysql, SiDotnet, SiWordpress, SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";


export default function Stack() {
    return (
        <div>
            <h2 className="text-center text-4xl my-2 font-bold">Co potrafię</h2>
            <div className="underline bg-darkGreen dark:bg-lightLemon"></div>
            <div className="flex justify-center px-2 mt-2">

                <div className="w-full flex flex-wrap justify-center mb-10">
                    <ProgressBar icon={<FaUniversalAccess size={40} />} description="jakiś tam tekst do opisania sobie co nie" name="WCAG 2.2" width="60%" />
                    <ProgressBar icon={<FaReact size={40}/>} description="jakiś tam tekst do opisania sobie co nie" name="React.js" width="95%" />
                    <ProgressBar icon={<RiJavascriptFill size={40}/>} description="jakiś tam tekst do opisania sobie co nie" name="javascript" width="96%" />
                    <ProgressBar icon={<FaBootstrap size={40}/>} description="jakiś tam tekst do opisania sobie co nie" name="bootstrap css" width="99%" />
                    <ProgressBar icon={<SiTailwindcss size={40}/>} description="jakiś tam tekst do opisania sobie co nie" name="tailwind css" width="90%" />
                    <ProgressBar icon={<SiWordpress size={40}/>} description="jakiś tam tekst do opisania sobie co nie" name="wordpress" width="75%" />
                    <ProgressBar icon={<SiDotnet size={40}/>} description="jakiś tam tekst do opisania sobie co nie" name=".net C#" width="60%" />
                    <ProgressBar icon={<SiMysql size={40}/>} description="jakiś tam tekst do opisania sobie co nie" name="my SQL" width="55%" />
                    <ProgressBar icon={<SiPhp size={40}/>} description="jakiś tam tekst do opisania sobie co nie" name="php" width="45%" />


                </div>
            </div>
        </div>
    )
}