import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import About from '../About/About.jsx'
import Contact from '../Contact/Contact.jsx'
import Map from '../Map/Map.jsx'
import Footer from '../Footer/Footer.jsx'

function App() {
  const location = useLocation()
  const [hiddenHeader, setHiddenHeader] = useState(true)

  const toggleHeader = () => {
    setHiddenHeader(prev => !prev)
  }

  return (
    <div className="page">
      <div className="page-content" key={location.pathname}>
        <Header
          hiddenHeader={hiddenHeader}
          toggleHeader={toggleHeader}
        />
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