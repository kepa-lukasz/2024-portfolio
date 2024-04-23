import ProjectCard from "./projectmodule";
import "./projects.css"

const Projects = () => {
    return (
        <div id="projects" className="w-full pt-4" style={{ maxWidth: "1900px" }}>
            <p  className="mb-5" ></p>
            <div className="ps-2 mt-5">
                <h1 className="ps-11 ms-12 dark:text-white ps-1 text-4xl my-4 font-bold">Projekty</h1>

                <div className="underline ms-12 bg-darkGreen dark:bg-lightLemon mb-3"></div>

                <h2 className="ms-6 ps-4 fs-5 dark:text-white">W tej sekcji znajdują się wszystkie projekty, które miałem okazję tworzyć, lub współtworzyć</h2>

            </div>
            <div className=" d-flex flex-wrap justify-content-around align-itmes-center card-container">

                <ProjectCard
                alert="uwaga, strona jest w budowie! informacje i linki mogą być nieprawidłowe"
                    logo={require("../../images/logo/logotechsquare.webp")}
                    alt="logotyp firmy techsquare"
                    background="linear-gradient(120deg, rgba(9,0,147,1) 0%, rgba(100,0,132,1) 65%)"
                    color="rgba(50, 14, 99, 0.8)"
                    name="Techsquare" 
                    link="http://techsquare.pl/"
                    />
               
                <ProjectCard
                    logo={require("../../images/logo/logocel194.avif")}
                    alt="logotyp  strony pordóżniczej cel194.pl"
                    link="https://cel-194.pl/"
                    background="linear-gradient(120deg, rgba(255,246,232,1) 0%, rgba(168,127,36,1) 100%)"
                    color="rgba(94,80,63, 0.6)"
                    name="Cel-194"
                />

                <ProjectCard
                    link="https://kepa-lukasz.github.io/my-first-portfolio/"
                    logo={require("../../images/logo/logoportfolio.webp")}
                    alt="logotyp mojej pierwszej strony"
                    background="linear-gradient(120deg, rgba(12,134,11,1) 12%, rgba(196,196,196,1) 90%)"
                    color="rgba(00, 74, 00, 0.6)"
                    name="Pierwsze portfolio"
                />
                 <ProjectCard
                    logo={require("../../images/logo/klimat.webp")}
                    alt="logotyp firmy klimat24.pl"
                    link="https://klimat-24.pl/"
                    background="linear-gradient(120deg, rgba(255,88,88,1) 0%, rgba(124,107,255,1) 74%)"
                    color="rgba(00, 00, 184, 0.6)"
                    name="KLimat-24" />


            </div>
        </div>
    )
}
export default Projects