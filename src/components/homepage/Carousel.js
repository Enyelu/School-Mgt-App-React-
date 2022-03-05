import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

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
    
        <section id="hero" className="d-flex justify-cntent-center align-items-center d-none d-md-block">
            <div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">
                <Slider {...settings}>
                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">Welcome to Haven Institute</h2>
                        <img width='900rem' height='300rem' className=" rounded" src='https://i2.wp.com/nigeriarealestatehub.com/wp-content/uploads/2015/09/FUNAAB-1.jpg' alt='' />
                        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item active">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Explore our Library</h2>
                            <img width='900rem' height='300rem' className="animate__animated animate__fadeInDown rounded" src='https://i.pinimg.com/originals/23/58/46/235846a739ade9a60459ef8c047f9a6b.jpg' alt='' />
                            <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item active">
                        <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">Let's Introduce you to our Student Club</h2>
                        <img width='900rem' height='300rem' className="animate__animated animate__fadeInDown rounded" src='https://th.bing.com/th/id/OIP.h69H20Fa9uAs3yhP2AODWwHaCu?pid=ImgDet&rs=1' alt='' />
                        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </section> 
    );
};

export default Carousel
