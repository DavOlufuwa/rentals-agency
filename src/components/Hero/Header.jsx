import React from 'react'
import { MapContainer } from 'react-leaflet'
import Logo from '../../assets/icons/rental-logo.svg'
import './Header.scss'

const Header = () => {
  return (
    <div className='background'>
    <div className="hero-bg">
    {/* navigation starts */}
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="google.com">Home</a>
            </li>
            <li>
              <a href="google.com">Landlords</a>
            </li>
            <li>
              <a href="google.com">Tenants</a>
            </li>
            <li>
              <a href="google.com">Contact us</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Navigation ends */}
      {/* Hero Section starts */}
      <section className="hero-section">
        <div className="text">
          The most affordable place to stay in the san franciso bay area
        </div>
        <div className="info-map">
          <MapContainer center={[6.5111645422411515, 3.3395034020485337]} zoom={13}>

          </MapContainer>
        </div>
      </section>
      {/* Hero section ends */}
    </div>
  </div>
  )
}

export default Header