import { Card, Button } from "flowbite-react"
import "./projects.css"
const ProjectCard = ({name, link, image, color }) => {
    image = "cel194.jpg"
    return (

        <div className="col-12 col-md-6 col-xl-3 my-3 p-0 p-5 mx-0">
            <Card 
            className="h-full w-full project-card bg-rose dark:bg-darkSlate b-darkSlate" 
            style={{backgroundImage : `url(images/${image})`}}
            >
                <div className="content text-center d-flex justify-content-center flex-wrap pt-10"
                style={{ "--card-color": color }}
                >
                    <h3 className="w-full pb-5 text-white">{name}</h3>
                    <div>

                    <Button>Sprawdź</Button>
                    </div>
                </div>

                
            </Card>
        </div>

    )
}
export default ProjectCard