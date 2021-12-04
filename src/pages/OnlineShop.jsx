import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/onlineShop.scss'

export const OnlineShop = () => {
  const [active, setActive] = useState(true)
  let classNames = require('classnames');
  const data = useSelector(state => state.rec)

  let ServicesActive = classNames({
    activeNav: active,
  })
  let DesignActive = classNames({
    activeNav: !active,
  })


  return (
    <div className='online-shop container'>
      {/* <h4>Наши услуги</h4> */}
      <div className='row categories-top'>
        <div className='col-12'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Online Shop</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row online-shop-content">
        <div className="col">
          <div className='osh-navigation'>
            <span className={ServicesActive} onClick={() => setActive(true)}>Our Services</span>
            <span className={DesignActive} onClick={() => setActive(false)}>Design</span>
          </div>
          <div className='osh-card-group'>
            {data.onlineShop.map(r => {
              return (
                <Link to={r.id}>
                  <div className='card'>
                    <img src={r.img} className="d-block" alt="..." />
                    <div className='card-body'>
                      <h5 className="card-title">{r.name}</h5>
                      <p className="card-text">{r.cost} so`m</p>
                      <button className='btn btn-danger'>Registered</button>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
