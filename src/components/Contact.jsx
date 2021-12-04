import React from 'react'
import '../css/contact.scss'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 contact-left'>
          <h3 className='my-4'>СВЯЖИТЕСЬ С НАМИ</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Имя *</label>
              <input
                type="text"
                className="form-control"
                placeholder='Введите свое имя'
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Эл. почта *</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder='Добавьте эл.почту'
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Тема *</label>
              <input
                type="text"
                className="form-control"
                placeholder='Укажите тему'
              />
            </div>
            <div className="mb-3">
              <label className='form-label'>Cообщения *</label>
              <textarea className="form-control" placeholder="Добавить сообщения" style={{ height: '100px' }}></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100">Oтправить</button>
          </form>
        </div>
        <div className='col-12 col-sm-12 col-lg-7  col-xl-8 contact-right'>
          <img src='https://www.smecorner.com/wp-content/uploads/contact-header-mobile.png' alt='' />
        </div>
      </div>
    </div>
  )
}
