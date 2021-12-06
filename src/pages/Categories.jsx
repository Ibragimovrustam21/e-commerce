import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/categories.scss'

export const Categories = () => {
  const data = useSelector(state => state.rec)
  return (
    <div className='categories'>
      <div className='row categories-top'>
        <div className='col-12 categories-top-col'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item"><Link to="/">Главный</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Продукты</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className='categories-content row'>
        <div className='col categories-content-inside'>
          {data.products.map(r => {
            return (
              <Link to={`/products/${r.id}`} key={r.id}>
                <div className="products-item card">
                  <div className='card-top'>
                    <img src={r.img} className="d-block " alt="..." />
                    <div className='view-product'>
                      <h5>Быстрый просмотр</h5>
                    </div>
                  </div>
                  <div className='card-body'>
                    <h5 className="card-title">{r.name}</h5>
                    <p className="card-text">{r.cost}сум</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
