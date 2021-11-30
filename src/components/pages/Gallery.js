import React from 'react';
import { Swiper } from 'swiper/react/swiper';
import { SwiperSlide } from 'swiper/react/swiper-slide';

// Import Swiper styles
import '../../../node_modules/swiper/swiper.min.css';
import "swiper/swiper.scss"

import SwiperCore, {EffectCoverflow,Pagination} from 'swiper';

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
                    <SwiperSlide><img  src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                    <SwiperSlide><img  src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
                    <SwiperSlide><img  src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
                    <SwiperSlide><img  src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
                    <SwiperSlide><img  src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
                    <SwiperSlide><img  src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide>
                    <SwiperSlide><img  src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide>
                    <SwiperSlide><img  src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide>
                    <SwiperSlide><img  src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide>
                </Swiper>
                    </div>


            </div>
        </div>
    );
};


export default Gallery;