import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import '../css/count.scss'
import { addCount, removeCount, flaer, paket, buklet, blackBokal, whiteBokal, ruchka, vizitka } from '../store/ProductSlice'

export const Count = ({ id, counter, cost, actionName, chooseSize }) => {
  const [count, setCount] = useState(counter)
  const [disable, setDisable] = useState('')
  const dispatch = useDispatch()
  const data = useSelector(state => state.rec)

  useEffect(() => {
    if (count === 1) setDisable(true);
    switch (actionName) {
      case 'paket':
        return dispatch(paket({ id, count }))
      case 'whiteBokal':
        return dispatch(whiteBokal({ id, count }))
      case 'blacBokal':
        return dispatch(blackBokal({ id, count }))
      case 'ruchka':
        return dispatch(ruchka({ id, count }))
      case 'flaer':
        return dispatch(flaer({ id, count }))
      case 'buklet':
        return dispatch(buklet({ id, count }))
      case 'vizitka':
        return dispatch(vizitka({ id, count, chooseSize }))
      default:
        return
    }
  }, [count,dispatch,data.cardItem])

  const zb_remove = () => {
    setCount(count - 1)
    dispatch(removeCount({ id, count, cost }))
  }

  const zb_add = () => {
    setDisable(false)
    setCount(count + 1)
    dispatch(addCount({ id, count, cost }))
  }

  return (
    <div className='btn-group'>
      <button className='button btn-left' disabled={disable} onClick={() => zb_remove()}>
        <svg width="12" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H14V2H0V0Z" fill="black" />
        </svg>
      </button>
      <span>{count}</span>
      <button className='button btn-right' onClick={() => zb_add()}>
        <svg width="10" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
        </svg>
      </button>
    </div>
  )
}
