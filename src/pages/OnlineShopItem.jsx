import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import '../css/onlineShopItem.scss'

export const OnlineShopItem = () => {
  const data = useSelector(state => state.rec)
  const path = useParams()
  const { name, img, cost, } = data.onlineShop.find(r => r.id === path.id)

  return (
    <div className='online-shop-item container'>
      <div className='row categories-top'>
        <div className='col-12 p-3'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page"><Link to='/online-shop'>Online Shop</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{name}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row osh-item-wrapper">
        <div className='col-12 col-md-6'>
          <img src={img} alt='' />
        </div>
        <div className="col-12 col-md-6">
          <div className="osh-item-info">
            <h4>{name}</h4>
            <div className='d-flex '>
              <span>1 soat</span>
              <span>{cost} so`m</span>
              <span>Location 1</span>
            </div>
            <button className='btn btn-danger'>Registered</button>
          </div>
          <div className="osh-item-subtitle">
            <h5>Описание услуги</h5>
            <p className='mt-3'>Subtitle</p>
          </div>
          <div className='osh-item-contact'>
            <h5>Contact</h5>
            <p className='mt-3'>Location: 123</p>
            <p>Phone: +998934342110</p>
            <p>Email: Delphin@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
