import { Routes, Route, useLocation } from 'react-router-dom'

// #Styles
import './App.css'

// #Components
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import About from '../About/About.jsx'
import Contact from '../Contact/Contact.jsx'
import Map from '../Map/Map.jsx'
import Footer from '../Footer/Footer.jsx'


function App() {
  const location = useLocation();

  return (
    <div className="page">
      <div className="page-content" key={location.pathname}>
        <Header />
        <Routes location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {location.pathname === '/contact' && <Map />}
      <Footer />
    </div>
  )
}

export default App