import Wrapper from "../components/another/wrapper";
import Hobbies from "./hobbies/myhobbies";
import Projects from "./projects/projects";
import Stack from "./stack/stack";
import { useEffect } from "react";
import ContactForm from "./contact/contact"
import AboutMe from "./aboutMe/aboutme";

const Pages = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".underline");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("underline-animation")
                }
                else {
                    entry.target.classList.remove("underline-animation")
                }

            })
        })
        sections.forEach(el => { observer.observe(el) })
    }, [])

    return (
        <div className="w-full" >
            <div
                style={{ marginTop: "70px" }}
            ></div>

            <Wrapper
                
                className={"custom-bg"}
                child={<Projects />}
            />
            <Wrapper
                className={"bg-rose dark:bg-darkBlue"}
                child={<AboutMe />}
            />

            <Wrapper
                
                className={"custom-bg "}
                child={<Stack />}
            />
            <Wrapper
                
                className={"bg-fiolet dark:bg-darkBlue"}
                child={<Hobbies />}
            />
            <Wrapper
                
                className={"bg-lightBeige dark:bg-darkSlate"}
                child={<ContactForm />}
            />


        </div>
    )
}
export default Pages