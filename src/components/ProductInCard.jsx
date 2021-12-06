import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { blackBokal, buklet, deleted, flaer, paket, ruchka, vizitka, whiteBokal } from '../store/ProductSlice'
import { Count } from './Count'

export const ProductInCard = () => {
  const data = useSelector(state => state.rec)
  const dispatch = useDispatch()
  const deleteItem = (id) => dispatch(deleted(id))
  if (data.cardItem.length === 0) return <h4 className='mt-2'>Вы еще не вибрали товар</h4>

  return (
    <>
      {
        data.cardItem.map(r => {
          const { id, name, img, cost, size, chooseSize, price, count, actionName } = r
          const switchCharge = () => {
            switch (actionName) {
              case 'paket':
                dispatch(paket({ id }))
                break
              case 'whiteBokal':
                dispatch(whiteBokal({ id }))
                break
              case 'blackBokal':
                dispatch(blackBokal({ id }))
                break
              case 'ruchka':
                dispatch(ruchka({ id }))
                break
              case 'flaer':
                dispatch(flaer({ id }))
                break
              case 'buklet':
                dispatch(buklet({ id }))
                break
              case 'vizitka':
                dispatch(vizitka({ id, chooseSize }))
                break
              default:
                break
            }
          }
          return (
            <div className="row mb-2" key={name}>
              <div className="col-12 col-sm-8 col-md-8 col-lg-7 p-0">
                <div className='product-item-in-card'>
                  <img src={img} alt='' />
                  <div className='product-item-info-in-card'>
                    <h5>Имя товара: {name}</h5>
                    <h6>Цена: {cost} сум</h6>
                    <p>Формат: {size}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-5 product-item-quality">
                <div className='price-block'>
                  <h5>{price} сум</h5>
                  <span className="bg-dark" onClick={() => deleteItem(id)}>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.99999 5.58623L11.95 0.63623L13.364 2.05023L8.41399 7.00023L13.364 11.9502L11.95 13.3642L6.99999 8.41423L2.04999 13.3642L0.635986 11.9502L5.58599 7.00023L0.635986 2.05023L2.04999 0.63623L6.99999 5.58623Z" />
                    </svg>
                  </span>
                </div>
                <div className='count-block'>
                  <Count counter={count} id={id} switchCharge={switchCharge} />
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
