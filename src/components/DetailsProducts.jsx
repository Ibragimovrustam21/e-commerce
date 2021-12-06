import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { totalPrice } from '../store/ProductSlice'

export const DetailsProducts = () => {
  const data = useSelector(state => state.rec)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(totalPrice())
  }, [data.cardItem, dispatch])

  return (
    <div className='detail-products'>
      <div className='basket-header'>
        <h3>Детали заказа</h3>
      </div>
      <div className='basket-charge'>
        <h5>Сумма</h5>
        <h6>{data.total} сум</h6>
      </div>
      <div className='basket-charge'>
        <h5>Доставка</h5>
        <h6>Бесплатная</h6>
      </div>
      <h6>Узбекистан</h6>
      <hr />
      <div className='basket-charge'>
        <h5>Итог:</h5>
        <h6>{data.total} сум</h6>
      </div>
      <div className='dp-btn'>
        <button className='btn btn-dark my-4'>Оформить заказ</button>
      </div>
    </div>
  )
}
