import { Card } from "react-bootstrap"
import AtomButton from "../../components/another/atom-button"
import "./projects.css"

import { Tilt } from 'react-tilt'

const defaultOptions = {
    reverse: true,  // reverse the tilt direction
    max: 15,     // max tilt rotation (degrees)
    perspective: 5000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 500,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const ProjectCard = ({ alt, name, link, background, color, logo, alert, ...rest }) => {
    return (

        <div data-aos-once="true" data-aos="fade-up" className="card-con py-4 mx-0">
            <Tilt options={defaultOptions} className="h-100">

                <Card
                    {...rest}
                    className="h-full h-100 w-full project-card bg-rose dark:bg-darkSlate b-darkSlate p-6"
                    style={{ background: background }}
                >
                    <div className="logo px-3">
                        <img src={logo} alt={alt} />
                    </div>

                    <div className="content text-center d-flex justify-content-center flex-wrap pt-10 px-3"
                        style={{ "--card-color": color }}
                    >
                        <h4 className="w-full pb-2 text-white">{name}</h4>
                        <p className="text-danger">{alert}</p>
                        <div className=" p-1 px-2 rounded bg-lightPink dark:bg-darkBlue" style={{ maxHeight: "43px" }}>
                            <a href={link} className="text-black">

                                <AtomButton text="Zobacz" />
                            </a>
                        </div>
                    </div>


                </Card>
            </Tilt>
        </div>

    )
}
export default ProjectCard