// #CSS
import './Header.css'

import { Link } from 'react-router-dom'

// #Images
import logo from '../../assets/MKE SKYMEDIA log back with text.png'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="MKE SKYMEDIA Logo" />
          <ul className='header__routes'>
            <li className='header__routes_page-item'>
              <Link to="/">
                <button className='header__routes_page-item-button'>Home</button>
              </Link>
            </li>
            <li className='header__routes_page-item'>
              <Link to="/about">
                <button className='header__routes_page-item-button'>About</button>
              </Link>
            </li>
            <li className='header__routes_page-item'>
              <Link to="/contact">
                <button className='header__routes_page-item-button'>Contact</button>
              </Link>
            </li>
          </ul>
      </div>
    </header>
  )
}

export default Header;