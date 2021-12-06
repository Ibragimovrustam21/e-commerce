import React from 'react'
import { Link } from 'react-router-dom'
import '../css/products.scss'
import Slider from "react-slick";
import { useSelector } from 'react-redux';

export const Products = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
  }
  const data = useSelector(state => state.rec)
  return (
    <div className='products'>
      <div className='products-top d-flex align-items-center'>
        <div className='products-top-inside'>
          <h3>Продукты</h3>
          <Link to='/products'>Все товары</Link>
        </div>
      </div>
      <div className='products-content'>
        <div className='react-slick-products'>
          <div className='products-item-block'>
            <Slider {...settings}>
              {
                data.products.map(r => {
                  return (
                    <div className="products-item" key={r.id}>
                      <Link to={`/products/${r.id}`}>
                        <div className='card'>
                          <div className='card-top'>
                            <img src={r.img} alt="..." />
                            <div className='view-product'>
                              <h5>Быстрый просмотр</h5>
                            </div>
                          </div>
                          <div className='card-body text-center'>
                            <h5 className="card-title">{r.name}</h5>
                            <p className="card-text">{r.cost}so`m</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
      </div >
    </div >
  )
}
