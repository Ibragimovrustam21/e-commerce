import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import '../css/productsItem.scss'
import { setCardItem, flaer, paket, buklet, blackBokal, whiteBokal, ruchka, vizitka, totalPrice } from '../store/ProductSlice'
import { Count } from './Count'

export const ProductsItem = () => {
  const path = useParams()
  const dispatch = useDispatch()
  let classNames = require('classnames');
  const data = useSelector(state => state.rec)
  const [count, setCount] = useState(1)
  const [chooseSize, setChooseSize] = useState('')
  const [animation, setAnimation] = useState(true)
  const [pathId, setPathId] = useState(+path.id)
  const { name, id, cost, artikul, img, info, size, actionName } = data.products.find(r => r.id === path.id)

  let disabledPrev = classNames({
    disabledPrev: +pathId === 1,
  })
  let disabledNext = classNames({
    disabledNext: +pathId === data.products.length,
  })
  let navbar = classNames({
    animation_navbar: animation,
    right_navbar: true
  })
  let darkBackground = classNames({
    dark_back: !animation
  })
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
  useEffect(() => {
    dispatch(totalPrice())
    setPathId(+path.id)
  }, [path.id, dispatch, data.cardItem])

  const AddToCard = () => {
    setAnimation(false)
    dispatch(setCardItem({ id, name, cost, count, chooseSize, img, actionName }))
    switchCharge()
  }


  return (
    <div className='products-item-page'>
      <div className={darkBackground} onClick={() => setAnimation(true)}></div>
      <div className='row navigation-menu-item'>
        <div className='col-12 col-md-6 col-sm-8 col-lg-8 p-3'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item"><Link to="/">Главный</Link></li>
              <li className="breadcrumb-item"><Link to="/products">Продукты</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{name}</li>
            </ol>
          </nav>
        </div>
        <div className='col-12 col-md-6 col-sm-4 col-lg-4 navigation-menu-item-pn'>
          <Link to={`/products/${pathId - 1}`} className={disabledPrev}>Назад</Link> | <Link to={`/products/${pathId + 1}`} className={disabledNext}>Вперед</Link>
        </div>
      </div>
      <div className='row products-info-wrapper'>
        <div className='col-12 col-md-6 col-lg-7 products-info-img'>
          <img src={img} alt='' />
        </div>
        <div className='col-12 col-md-6 col-lg-5 products-info'>
          <h4>{name}</h4>
          <h6>Артикул продукта: {artikul}</h6>
          <p>{info}</p>
          <div className='d-flex'>
            <h5>Цена:</h5>&nbsp;
            <p>{cost}сум</p>
          </div>
          <div className='size-input-block'>
            {
              size && (
                <>
                  <label className='form-label'>Формат</label>
                  <select onChange={(e) => setChooseSize(e.target.value)} className="form-select">
                    <option defaultValue>Выберите формат</option>
                    {size.map(s => <option value={s.charge} key={s.format}>{s.format}</option>)}
                  </select>
                </>
              )
            }
          </div>
          <div className='size-input-block'>
            <label className='form-label'>Количество</label>
            <input type='number' min='1' defaultValue={count} onChange={(e) => setCount(e.target.value)} className='form-control' />
          </div>
          <div className='delivery'>
            <h5>ДОСТАВКА</h5>
            <p>Есть бесплатная доставка по Узбекистану (срок 3-5 рабочих дней).</p>
          </div>
          <div className='submit-btn my-5'>
            <button className='btn btn-dark w-100' onClick={() => AddToCard()}>Добавить в корзину</button>
          </div>
        </div>
      </div>
      <div className={navbar}>
        <div className='right-navbar-head'>
          <div className='rnh-inside'>
            <h5>Корзина</h5>
            <span onClick={() => setAnimation(true)}>
              <svg width="16" height="12" viewBox="0 0 16 16" fill="#000" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.172 7.00017L6.808 1.63617L8.222 0.222168L16 8.00017L8.222 15.7782L6.808 14.3642L12.172 9.00017H0V7.00017H12.172Z" />
              </svg>
            </span>
          </div>
        </div>
        <div className='right-navbar-content'>
          {data.cardItem.map(r => {
            return (
              <div className='row rnp-wrapper mb-2' key={r.id}>
                <div className='col-5'>
                  <img src={r.img} alt='' />
                </div>
                <div className='col-7 rnp-info'>
                  <h6>{r.name}</h6>
                  <p>{r.price} сум</p>
                  <Count counter={r.count} id={r.id} switchCharge={switchCharge} />
                </div>
              </div>
            )
          })}
        </div>
        <div className='right-navbar-footer' >
          <div className='right-navbar-price'>
            <h5>Итог:</h5>&nbsp;
            <h5>{data.total} сум</h5>
          </div>
          <div className='right-navbar-btn'>
            <Link to='/basket'>
              <button className='btn btn-danger'>Мои заказы</button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}
