import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleted } from '../store/ProductSlice'
import { Count } from './Count'

export const ProductInCard = () => {
  const data = useSelector(state => state.rec)
  const dispatch = useDispatch()
  const deleteItem = (id) => dispatch(deleted(id))

  if (data.cardItem.length === 0) return <h4>Вы еще не вибрали товар</h4>
  return (
    <>
      {
        data.cardItem.map(r => {
          return (
            <div className="row" key={r.name}>
              <div className="col-12 col-sm-8 col-md-8 col-lg-7 p-0">
                <div className='product-item-in-card'>
                  <img src={r.img} alt='' />
                  <div className='product-item-info-in-card'>
                    <h5>Имя товара: {r.name}</h5>
                    <h6>Цена: {r.cost} сум</h6>
                    <p>Размер: {r.size}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-5 product-item-quality">
                <div className='price-block'>
                  <h5>{r.price} сум</h5>
                  <button className="btn btn-dark" onClick={() => deleteItem(r.id)}>X</button>
                </div>
                <div className='count-block'>
                  <Count counter={r.count} id={r.id} cost={r.cost} chooseSize={r.size} actionName={r.actionName} />
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
