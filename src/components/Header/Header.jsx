import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/MKE SKYMEDIA log back with text.png'

function Header({ toggleHeader }) {
  return (
    <header className="header">
      <div className="header__desktop">
        <img className="header__logo" src={logo} alt="MKE SKYMEDIA Logo" />
        <ul className="header__routes">
          <li className="header__routes_page-item">
            <Link to="/">
              <button className="header__routes_page-item-button">Home</button>
            </Link>
          </li>
          <li className="header__routes_page-item">
            <Link to="/about">
              <button className="header__routes_page-item-button">About</button>
            </Link>
          </li>
          <li className="header__routes_page-item">
            <Link to="/contact">
              <button className="header__routes_page-item-button">Contact</button>
            </Link>
          </li>
        </ul>
      </div> 
        <div className='header__mobile'>
        <img 
            className="header__logo 
            header__logo--mobile" 
            src={logo} 
            alt="MKE SKYMEDIA Logo" 
          />
        <div className="header__mobile-menu">
          <ul className="header__routes header__routes--mobile">
            <li className="header__routes_page-item">
              <Link to="/" onClick={toggleHeader}>
                <button className="header__routes_page-item-button">Home</button>
              </Link>
            </li>
            <li className="header__routes_page-item">
              <Link to="/about" onClick={toggleHeader}>
                <button className="header__routes_page-item-button">About</button>
              </Link>
            </li>
            <li className="header__routes_page-item">
              <Link to="/contact" onClick={toggleHeader}>
                <button className="header__routes_page-item-button">Contact</button>
              </Link>
            </li>
          </ul>
        </div>
        </div>
      
    </header>
  )
}

export default Header