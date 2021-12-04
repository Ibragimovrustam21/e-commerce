import React from 'react'
import { DetailsProducts } from '../components/DetailsProducts'
import { ProductInCard } from '../components/ProductInCard'
import '../css/basket.scss'

export const Basket = () => (
  <div className='basket container'>
    <div className='row'>
      <div className='col-12 col-md-8 col-lg-8'>
        <div className='basket-header m-0'>
          <h3>Моя корзина</h3>
        </div>
        <div className='products-in-card'>
          <ProductInCard />
        </div>
      </div>
      <div className="col-12 col-md-4 col-lg-4">
        <DetailsProducts />
      </div>
    </div>
  </div>
)
