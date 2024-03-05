import { Card } from "flowbite-react"
import "./cards.css"
const StackCard = ({ icon, description, name, color }) => {
    return (
        <div className="col-10 col-md-6 col-xl-4 px-0 px-md-3 my-3">

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