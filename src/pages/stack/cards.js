import { Card } from "flowbite-react"
import "./cards.css"
const StackCard = ({ icon, description, name, color }) => {
    return (
        <div data-aos-once="true" data-aos="fade-up" className="col-11 col-sm-6  col-lg-4 col-xl-3 px-0 px-md-3 my-3 px-3 md:px-0">

            <Card className="h-full stack-card bg-rose dark:bg-darkSlate b-darkSlate" style={{ "--card-color": color }}>
                <div style={{ zIndex: 5, position: "relative" }}>

                    <div className="d-flex justify-content-start align-items-center text-darkSlate dark:text-white">

                        {icon}

                        <h3>
                            &nbsp;{name}
                        </h3>
                    </div>
                    <p className=" text-darkSlate dark:text-white mt-3">{description}</p>
                </div>
            </Card>
        </div>
    )
}
export default StackCard