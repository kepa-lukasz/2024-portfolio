import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import './myhobbies.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Hobbies = () => {
    return (
        <div className="w-full m-0 p-0 mb-5" style={{ maxWidth: "1900px", overflow : "hidden" }}>
            <p id="hobby"></p>
            <h1 className="pt-12 ms-6 dark:text-white ps-4 text-4xl my-4 font-bold">Hobby</h1>
            <div className="underline ms-12 bg-darkGreen dark:bg-lightLemon mb-3"></div>
            <h2 className="ms-6 ps-4 fs-5 dark:text-white ">W tej sekcji napisałem, co lubię robić w wolnych chwilach</h2>            
            <div className='d-flex justify-content-center'>
            <div className="swiper-con" style={{}}>
                <Swiper
                loop={true}
                    navigation={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                        <SwiperSlide>
                            <img src={require("../../images/hobbies/web.avif")} alt="napis WEB utowrzony z wielu znaków"/>
                            <div className='slide-text d-flex justify-content-end'>
                                <h2 className='w-full fs-2 text-white text-center'>Web Development</h2>
                                <p className='px-3 px-md-5 text-center text-white fs-5'>od kilku lat interesuje się programowaniem internetowym. Staram się nabierać doświadczenie i kształcić się przy pomocy kursów, webinarów i pracy własnej</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={require("../../images/hobbies/mozg.avif")} alt="wiele zer i jedynek, kod binarny"/>
                            <div className='slide-text d-flex justify-content-end'>
                                <h2 className='w-full fs-2 text-white text-center'>Gry logiczne</h2>
                                <p className='px-3 px-md-5 text-center text-white fs-5'>Co jakiś czas znajdują nową grę logiczną lub inną aktywność, na którą poświęcam wolne chile(pasjans, sudoku, szachy, kraje świata)</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={require("../../images/hobbies/pilka.avif")}alt="sztuczka piłkarska" />
                            <div className='slide-text d-flex justify-content-end'>
                                <h2 className='w-full fs-2 text-white text-center'>Sport</h2>
                                <p className='px-3 px-md-5 text-center text-white fs-5'>Wieczorami staram się regularnie wychodzić na siłownię lub orlik, pomaga mi to utrzymywać względną formę fizyczną :)</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={require("../../images/hobbies/wakacje.avif")} alt="Młodzież na plaży" />
                            <div className='slide-text d-flex justify-content-end'>
                                <h2 className='w-full fs-2 text-white text-center'>Praca z młodzieżą</h2>
                                <p className='px-3 px-md-5 text-center text-white fs-5'>Z uwagi na pracę i harcerstwo mam dużo kontaktu z ludźmi, którzy wchodzą w dorosłość, praca z nimi sprawia mi dużo satysfakcji</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={require("../../images/hobbies/zhrjpg.avif")} alt="Krzyż harcerski" />
                            <div className='slide-text d-flex justify-content-end'>
                                <h2 className='w-full fs-2 text-white text-center'>ZHR</h2>
                                <p className='px-3 px-md-5 text-center text-white fs-5'>Harcerstwo już od młodego wieku rozwijało pod kontem rozwoju umiejętności miekkich, miałem okazję poznać wspaniałych ludzi</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div >
            </div>
            </div>
    );
}
export default Hobbies;
