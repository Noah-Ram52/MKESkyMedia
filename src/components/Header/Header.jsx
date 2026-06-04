// #CSS
import './Header.css'

// #Images
import logo from '../../assets/MKE SKYMEDIA log back with text.png'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="MKE SKYMEDIA Logo" />
          <ul className='header__routes'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </div>
    </header>
  )
}

export default Header;