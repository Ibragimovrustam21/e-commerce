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
        <h5>Summa</h5>
        <h6>{data.total} so`m</h6>
      </div>
      <div className='basket-charge'>
        <h5>Delivery</h5>
        <h6>Free</h6>
      </div>
      <h6>Uzbekistan</h6>
      <hr />
      <div className='basket-charge'>
        <h5>Outcome:</h5>
        <h6>{data.total} so`m</h6>
      </div>
      <div className='dp-btn'>
        <button className='btn btn-dark my-4'>Submit</button>
      </div>
    </div>
  )
}
