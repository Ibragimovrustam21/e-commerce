import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../css/navbar.scss'

export const Navbar = () => {
  let classNames = require('classnames');
  const data = useSelector(state => state.rec)
  const [menuActive, setMenuActive] = useState(false)
  const [hamburgerIcon, setHamburgerIcon] = useState(true)

  let menuBlock = classNames({
    menu: true,
    menu_active: menuActive
  })
  const navActive = () => {
    if (window.innerWidth < 769) {
      setMenuActive(!menuActive)
      setHamburgerIcon(!hamburgerIcon)
    }
  }
  let darkBackground = classNames({
    dark_back: menuActive
  })
  let hamburger = classNames({
    hamburger: true,
    active: !hamburgerIcon
  })

  return (
    <>
      <div className='position-relative'>
        <div className={darkBackground} onClick={navActive} />
        <nav className="navbar">
          <div className="container-fluid p-2 d-flex align-items-center justify-content-between">
            <div className='navbar-brand-block'>
              <Link to='/' className="navbar-brand">Delphin</Link>
              <div className='search-block'>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search..."
                />
                <svg width="15" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.867 16 16 12.867 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16ZM17.485 16.071L20.314 18.899L18.899 20.314L16.071 17.485L17.485 16.071Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className={menuBlock}>
              <div className='menu-wrapper'>
                <ul className='navbar-nav'>
                  <li className='nav-item' onClick={navActive}>
                    <NavLink exact='true' to='/'>Home</NavLink>
                  </li>
                  <li className='nav-item' onClick={navActive}>
                    <NavLink to='/products'>Products</NavLink>
                  </li>
                  <li className='nav-item' onClick={navActive}>
                    <NavLink to='/online-shop'>Online apply</NavLink>
                  </li>
                  <li className='nav-item' onClick={navActive}>
                    <NavLink to='/contact-me'>Contact</NavLink>
                  </li>
                  <li className='nav-item basket-link' onClick={navActive}>
                    <NavLink to='/basket'>Basket</NavLink>
                  </li>
                </ul>
                <div className='user-block-wrapper'>
                  <Link to='/basket'>
                    <div className="basket-card position-relative">
                      <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0001 0C11.8566 0 13.6371 0.737498 14.9498 2.05025C16.2626 3.36301 17.0001 5.14348 17.0001 7H18.0741C18.326 7.00001 18.5686 7.09507 18.7534 7.26618C18.9382 7.4373 19.0517 7.67187 19.0711 7.923L19.9171 18.923C19.9375 19.1874 19.852 19.4491 19.6795 19.6505C19.507 19.8519 19.2615 19.9766 18.9971 19.997L18.9201 20H1.08008C0.814862 20 0.560508 19.8946 0.372972 19.7071C0.185435 19.5196 0.0800781 19.2652 0.0800781 19L0.0830781 18.923L0.929078 7.923C0.948473 7.67187 1.06193 7.4373 1.24676 7.26618C1.43159 7.09507 1.6742 7.00001 1.92608 7H3.00008C3.00008 5.14348 3.73758 3.36301 5.05033 2.05025C6.36309 0.737498 8.14356 0 10.0001 0ZM17.1471 9H2.85208L2.15908 18H17.8401L17.1471 9ZM12.0001 11V13H8.00008V11H12.0001ZM10.0001 2C8.71161 2.00007 7.47292 2.49754 6.5423 3.38866C5.61169 4.27978 5.061 5.49575 5.00508 6.783L5.00008 7H15.0001C15 5.71154 14.5025 4.47284 13.6114 3.54222C12.7203 2.61161 11.5043 2.06092 10.2171 2.005L10.0001 2Z" fill="black" />
                      </svg>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {data.cardItem.length}
                      </span>
                    </div>
                  </Link>
                  <div className='ub-item' onClick={navActive}>
                    <div className="user-block">
                      IR
                    </div>
                    <h4 className='text-danger'>Ibragimov</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={hamburger} onClick={navActive}>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

