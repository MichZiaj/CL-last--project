import React from 'react';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';

// Import Swiper styles
import '../../../node_modules/swiper/swiper.min.css';
import "swiper/swiper.scss"

import SwiperCore, {EffectCoverflow,Pagination} from 'swiper';



//Gallery photo import
import photo1 from '../../images/Gallery/photo1.jpg';
import photo2 from '../../images/Gallery/photo2.jpg';
import photo3 from '../../images/Gallery/photo3.jpeg';
import photo4 from '../../images/Gallery/photo4.jpeg';
import photo5 from '../../images/Gallery/photo5.jpeg';
import photo6 from '../../images/Gallery/photo6.jpg';
import photo7 from '../../images/Gallery/photo7.jpeg';
import photo8 from '../../images/Gallery/photo8.jpeg';
import photo9 from '../../images/Gallery/photo9.jpeg';
import photo10 from '../../images/Gallery/photo10.jpeg';
import photo11 from '../../images/Gallery/photo11.jpeg';
import photo12 from '../../images/Gallery/photo12.jpeg';


SwiperCore.use([EffectCoverflow,Pagination]);


const Gallery = () => {
    return (
        <div className="container">
            <div className="text__container">
                <div className="swiper__container">

                <Swiper effect={'coverflow'} navigation={true} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} pagination={true} className="mySwiper">
                    <SwiperSlide><img  src={photo1} alt="Salon" /></SwiperSlide>
                    <SwiperSlide><img  src={photo2} alt="Akcesoria fryzjerskie" /></SwiperSlide>
                    <SwiperSlide><img  src={photo3} alt="Fryzura pierwsza krótko ścięte włosy" /></SwiperSlide>
                    <SwiperSlide><img  src={photo4} alt="Długa wyrównana broda" /></SwiperSlide>
                    <SwiperSlide><img  src={photo5} alt="Fade oraz krótka borda" /></SwiperSlide>
                    <SwiperSlide><img  src={photo6} alt="Krótka cieniowana fryzura" /></SwiperSlide>
                    <SwiperSlide><img  src={photo7} alt="Strzyżenie nożyczkami" /></SwiperSlide>
                    <SwiperSlide><img  src={photo8} alt="Mgiełka na włosy" /></SwiperSlide>
                    <SwiperSlide><img  src={photo9} alt="Długa wyrównana brod" /></SwiperSlide>
                    <SwiperSlide><img  src={photo10} alt="Fade z grzywką" /></SwiperSlide>
                    <SwiperSlide><img  src={photo11} alt="Fade i zgolona broda" /></SwiperSlide>
                    <SwiperSlide><img  src={photo12} alt="Pocieniowane włosy z wyrównaną brodą" /></SwiperSlide>

                </Swiper>
                    </div>


            </div>
        </div>
    );
};


export default Gallery;