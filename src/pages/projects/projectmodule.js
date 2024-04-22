import { Card} from "react-bootstrap"
import AtomButton from "../../components/another/atom-button"
import "./projects.css"
const ProjectCard = ({ alt, name, link, background, color, logo, alert, ...rest }) => {
    return (

        <div data-aos-once="true" data-aos="fade-up" className="card-con py-4 mx-0">
            <Card
                {...rest}
                className="h-full h-100 w-full project-card bg-rose dark:bg-darkSlate b-darkSlate p-6"
                style={{ background: background }}
            >
                <div className="logo px-3">
                    <img src={logo} alt={alt}/>
                </div>

                <div className="content text-center d-flex justify-content-center flex-wrap pt-10 px-3"
                    style={{ "--card-color": color }}
                >
                    <h4 className="w-full pb-2 text-white">{name}</h4>
                    <p className="text-danger">{alert}</p>
                    <div className=" p-1 px-2 rounded bg-lightPink dark:bg-darkBlue" style={{maxHeight : "43px"}}>
                        <a href={link} className="text-black">

                            <AtomButton text="Zobacz" />
                        </a>
                    </div>
                </div>


            </Card>
        </div>

    )
}
export default ProjectCard