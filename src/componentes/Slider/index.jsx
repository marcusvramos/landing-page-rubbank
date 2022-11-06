import React from 'react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';
import './Slider.css';



const Slider = ({ settings, children }) => {
    return (
      <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings} >{children}</Swiper>
    )
}

export default Slider

