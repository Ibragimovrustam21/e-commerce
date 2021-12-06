import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import '../css/count.scss'
import { addCount, removeCount } from '../store/ProductSlice'

export const Count = ({ id, counter, switchCharge }) => {
  const dispatch = useDispatch()
  const [count, setCount] = useState('')
  const [disable, setDisable] = useState('')

  useEffect(() => {
    if (counter === 1) setDisable(true)
    setCount(counter)
  }, [counter])

  const zb_remove = () => {
    dispatch(removeCount({ id }))
    switchCharge()
  }

  const zb_add = () => {
    dispatch(addCount({ id }))
    switchCharge()
    setDisable(false)
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
