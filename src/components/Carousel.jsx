import React from "react";
import Slider from "react-slick";
import '../css/carousel.scss'

export const Carousel = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
  }

  return (
    <div className='react-slick-carousel'>
      <Slider {...settings}>
        <div className='react-slick-carousel-item'>
        <img src='https://thecolourmoon.com/assets/images/single-vendor.png' alt='' />
        </div>
        <div className='react-slick-carousel-item'>
          <img src='https://thecolourmoon.com/assets/images/single-vendor.png' alt='' />
        </div>
      </Slider>
    </div>
  )
}