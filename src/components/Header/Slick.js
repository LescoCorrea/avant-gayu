import React from 'react'
import Slider from "react-slick";
import Testimonial from './Testimonial';

export default function slick() {



    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        centerPadding: "80px",
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 524,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className='slick-container'>
                <Slider {...settings}>
                    <div className="testimonial-card">
                        <Testimonial />
                    </div>
                    <div className="testimonial-card">
                        <Testimonial />
                    </div>
                    <div className="testimonial-card">
                        <Testimonial />
                    </div>
                    <div className="testimonial-card">
                        <Testimonial />
                    </div>
                    <div className="testimonial-card">
                        <Testimonial />
                    </div>
                    <div className="testimonial-card">
                        <Testimonial />
                    </div>
                    <div className="testimonial-card">
                        <Testimonial />
                    </div>
                    <div className="testimonial-card">
                        <Testimonial />
                    </div>
                    <div className="testimonial-card">
                        <Testimonial />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
