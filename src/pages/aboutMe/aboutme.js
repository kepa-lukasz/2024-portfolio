import React from "react";
import "./aboutMe.css"


const AboutMe = () => {
    return (
        <div id="aboutme" className="w-full pt-4" style={{ maxWidth: "1900px", height: "100vh", overflow: "hidden" }}>
            <p className="mb-5" ></p>
            <div className="ps-2 mt-5">
                <h1 className="ps-11 ms-12 dark:text-white ps-1 text-4xl my-4 font-bold">O mnie</h1>

                <div className="underline ms-12 bg-darkGreen dark:bg-lightLemon mb-3"></div>

                <h2 className="ms-6 ps-4 fs-5 dark:text-white">subtitle</h2>

            </div>
            <div style={{position: "relative"}} className=" d-flex flex-wrap justify-content-around align-itmes-center circle-container">
                <div className="squares  bg-success">
                    {/* <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div> */}
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe