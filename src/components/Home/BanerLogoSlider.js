import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Swiper styles
import "swiper/css";

//Images

// import Swiper core and required modules
import { Autoplay } from "swiper";

//SwiperCore.use([EffectCoverflow,Pagination]);

const dataBlog = [];

const BanerLogoSlider = () => {
  return (
    <>
      <Swiper
        className="banner-clients-swiper"
        speed={1500}
        //parallax= {true}
        slidesPerView={3}
        spaceBetween={70}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
        breakpoints={{
          575: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
      >
        {dataBlog.map((d, i) => (
          <SwiperSlide key={i}>
            <div className="clients-logo">
              <img className="logo-main" src={d.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BanerLogoSlider;
