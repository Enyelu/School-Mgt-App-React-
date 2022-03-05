import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClientSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        className: "slides"
    };

    return (
      
        <Slider {...settings}>
          <div className="carousel-item active">
                <div className="carousel-container">
                    <img src="../../assets/img/clients/client-1.png" className="img-fluid" alt="" />
                </div>
            </div>
            <div>


                    <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide"><img src="../../assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="../../assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="../../assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="../../assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="../../assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="../../assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="../../assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                        <div className="swiper-slide"><img src="../../assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
        </Slider>
    );
};

export default ClientSlider
