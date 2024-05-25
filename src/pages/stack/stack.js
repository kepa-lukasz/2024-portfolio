
import { FaBootstrap, FaReact, FaUniversalAccess } from "react-icons/fa6";
import { SiPhp, SiMysql, SiDotnet, SiWordpress, SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import StackCard from "./cards";


const  Stack = () => {
    return (
        <div className="w-full" style={{maxWidth : "1900px"}} >
            <p id="skills" ></p>
            <h1 className="pt-12 ms-6 dark:text-white ps-4 text-4xl my-4 font-bold">Umiejętności</h1>
                <div className="underline ms-12 bg-darkGreen dark:bg-lightLemon mb-3"></div>
                <h2 className="ms-6 ps-4 fs-5 dark:text-white">W tej sekcji znajdują się technologie, z którymi miałem okazję pracować</h2>

            <div className="flex mt-2 px-0 px-md-4 mx-1 justify-content-center">

                <div className="w-full flex flex-wrap justify-center mb-10">
                    <StackCard level="0" color="cadetblue" icon={<FaUniversalAccess size={40} />} description="Web Content Accessibility Guidelines 2.2 to normy poprawiające dostępność treści online dla różnorodnych użytkowników, kładące nacisk na inkluzję i łatwy dostęp do informacji." name="WCAG 2.2"  />
                    <StackCard level="2" color="blue" icon={<FaReact size={40}/>} description="Biblioteka React.js ułatwia budowanie dynamicznych interfejsów webowych poprzez składniki i efektywność aktualizacji widoku." name="React.js"  />
                    <StackCard level="2" color="crimson" icon={<RiJavascriptFill size={40}/>} description="JavaScript to dynamiczny język programowania stosowany do interaktywnych stron internetowych i aplikacji. Bazuje na ECMAScript, wspierany przez większość przeglądarek." name="javascript"  />
                    <StackCard level="2" color="chocolate" icon={<FaBootstrap size={40}/>} description="Bootstrap to popularny framework front-end, ułatwiający szybkie i responsywne projektowanie stron internetowych z wykorzystaniem HTML, CSS i JavaScript." name="bootstrap"  />
                    <StackCard level="1" color="green" icon={<SiTailwindcss size={40}/>} description="Tailwind CSS to nowoczesny framework CSS, umożliwiający szybkie tworzenie niestandardowych stylów poprzez definiowanie klas bezpośrednio w kodzie HTML" name="tailwind&nbsp;css"  />
                    <StackCard level="1" color="cadetblue" icon={<SiWordpress size={40}/>} description="WordPress to popularny system zarządzania treścią (CMS), umożliwiający łatwe tworzenie i zarządzanie stronami internetowymi, blogami oraz sklepami online." name="wordpress"  />
                    <StackCard level="1" color="crimson" icon={<SiDotnet size={40}/>} description=".NET oraz C# to potężne narzędzia w programowaniu. Są używane często do tworzenia aplikacji Windows, webowych i rozwiązań korporacyjnych." name=".net C#"  />
                    {/* <StackCard level="2" color="blue" icon={<SiMysql size={40}/>} description="MySQL to popularny system zarządzania bazą danych, wykorzystywany w aplikacjach webowych. Zapewnia efektywne przechowywanie, zarządzanie i pobieranie danych." name="my SQL"  /> */}
                    {/* <StackCard level="0" color="chocolate" icon={<SiPhp size={40}/>} description="PHP to skryptowy język programowania często stosowany do tworzenia dynamicznych stron internetowych. Jest szeroko używany i łatwy do integracji z bazami danych." name="php"  /> */}


                </div>
            </div>
        </div>
    )
}
export default Stack