import { Card } from "flowbite-react"
import "./cards.css"
const StackCard = ({ level, icon, description, name, color }) => {
    const star = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
    const level_info = [
        <div>
            <div className="d-flex mt-2">{star}</div>
            <p>Miałem kontakt przez niedługi czas, znam podstawowe wykorzystanie</p>
        </div>,
        <div>
            <div className="d-flex mt-2">{star}{star}</div>
            <p>Znam podstawy, potrafię stworzyć prosty projekt</p>
        </div>,
        <div>
            <div className="d-flex mt-2">{star}{star}{star}</div>
            <p >Posługuję się często, potrafię stworzyć bardziej zaawansowane projekty</p>
        </div>
    ]
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
                    <div className="fw-lighter fst-italic text-darkSlate dark:text-white">{level_info[level]}</div>
                    <p className=" text-darkSlate dark:text-white mt-3">{description}</p>
                </div>
            </Card>
        </div>
    )
}
export default StackCard