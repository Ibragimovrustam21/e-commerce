import React from 'react'
import { Link } from 'react-router-dom'
import '../css/about.scss'

export const About = () => (
  <div className='about'>
    <div className='row'>
      <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 about-right'>
        <h3>О КОМПАНИИ</h3>
        <h5>Кто мы такие</h5>
        <p>
          Компания «Delfin studio» продолжает свою деятельность
          еще с 1997 года, уже прошло более 20 лет как наша компания помогает как новым так и старым компаниям, со своими качественными продуктами значимо повышает их знатность
        </p>
        <Link to='/'>Подробнее</Link>
      </div>
      <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-7 about-left'>
        <img src='https://elements-cover-images-0.imgix.net/27bc3574-7f08-4f88-be0c-9d3ef9135b50?auto=compress%2Cformat&fit=max&w=710&s=50f9df9cd06e5ab8272c45c9b4becf3d' alt='' />
      </div>
    </div>
  </div>
)
