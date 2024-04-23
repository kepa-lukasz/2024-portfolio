import React from "react";
import "./aboutMe.css"


const AboutMe = () => {
    return (
        <div id="aboutme" className="square-con w-full pt-4 pb-5" style={{ maxWidth: "1900px", overflow: "hidden" }}>
            <p className="mb-5" ></p>
            <div className="ps-2 mt-5">
                <h1 className="ps-11 ms-12 dark:text-white ps-1 text-4xl my-4 font-bold">O mnie</h1>

                <div className="underline ms-12 bg-darkGreen dark:bg-lightLemon mb-3"></div>

                <h2 className="ms-6 ps-4 fs-5 dark:text-white">Dlaczego lubię programować?</h2>

            </div>
            <div className="squares d-none d-md-block">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>


            <div style={{ position: "relative" }} className=" d-flex flex-wrap justify-content-around align-itmes-center circle-container">
                <div className="squares px-4">

                    <div className="dark:bg-darkSlate bg-fiolet mb-5 d-flex flex-wrap py-2 aboutcon pe-lg-5">
                        <div className=" imgcon col-12  col-md-5 col-xl-4 p-4 d-flex justify-content-center flex-wrap text-center">
                            <div className="col-12 col-sm-8 col-md-12">

                                <img src={require("../../images/hacker.webp")} />
                            </div>
                            <a className="w-100 dark:text-white" href="http://www.freepik.com">Designed by catalyststuff / Freepik</a>
                        </div>
                        <div className="dark:text-white col-12  col-md-7 col-xl-8 px-2 pt-0 pt-lg-4 pe-lg-5">
                            <p>W technikum odkryłem, jak wielką satysfakcję daje mi programowanie. To właśnie tam rozpocząłem swoją przygodę z tworzeniem aplikacji internetowych.
                            </p>
                            <p>Włożyłem wiele wysiłku w naukę działania świata internetu i pragnę kontynuować naukę oraz zdobywać doświadczenie w programowaniu aplikacji internetowych.
                            </p>
                            <p>Tworzenie sprawia mi przyjemność, ponieważ każdy projekt to pełen wachlarz emocji. Na końcu zawsze czuję nie tylko satysfakcję i dumę, ale również niedosyt i poczucie, że to nie jest jeszcze wszystko, na co mnie stać.
                            </p>
                            <p>Dlatego każde nowe zadanie, projekt czy inne przedsięwzięcie to dla mnie wyzwanie, które oprócz wiedzy technicznej i nowych umiejętności, przynosi mi radość. Mam nadzieję, że to uczucie nigdy się nie zmieni.
                            </p>
                            <p>Niestety, poza szkołą nie miałem okazji pracować z kimś, kto mógłby stać się moim mentorem. Praca z osobą, która mogłaby kierować moim rozwojem i pokazać, które praktyki są dobre, a które złe, to coś, czego zdecydowanie mi brakuje
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe