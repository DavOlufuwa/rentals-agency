import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Logo from '../../assets/icons/rental-logo.svg'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown , faSearch} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Header = () => {
  const transition = {type:'spring', duration : 3}
  const[menu, setMenu] = useState(true)
  const bodyTag = document.getElementById('body')
  bodyTag.style.overflow = menu ? "" : "hidden";

  return (
    <div className='background'>
    <div className="hero-bg">
    {/* navigation starts */}
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <nav className={menu ? "" : "open"}>
          <ul>
            <li
              onClick={()=>setMenu(!menu)}
            >
              <a href="google.com">Home</a>
            </li>
            <li
              onClick={()=>setMenu(!menu)}
            >
              <a href="google.com">Landlords</a>
            </li>
            <li
              onClick={()=>setMenu(!menu)}
            >
              <a href="google.com">Tenants</a>
            </li>
            <li
              onClick={()=>setMenu(!menu)}
            >
              <a href="google.com">Contact us</a>
            </li>
          </ul>
        </nav>
        <div className="mobile-menu"
        >
        <Icon 
          icon={menu ? "mdi:menu" : "mdi:hamburger-menu-back"}
          onClick={()=>setMenu(!menu)}
        />
        </div>
      </header>
      {/* Navigation ends */}
      {/* Hero Section starts */}
      <section className="hero-section">
        <motion.div 
          initial ={{opacity: 0, x: -100}}
          transition = {{...transition, duration: 3}}
          whileInView = {{opacity: 1, x: 0 }}
        className="text">
          The most affordable place to stay in the san franciso bay area
        </motion.div>
        <motion.div
          initial ={{opacity: 0, x: 100}}
          transition = {{...transition, duration: 2}}
          whileInView = {{opacity: 1, x: 0 }}
          className="info-map"
         >
          <MapContainer 
            center={[37.788817260213335, -122.4289174721632]} 
            zoom={13} 
            scrollWheelZoom={false}
            className="mapOutlook"
          >
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[37.788817260213335, -122.4289174721632]}
            >
            <Popup 
              className='pop-up'
            >
              We are here, kindly visit us
            </Popup>
          </Marker>
          </MapContainer>
          <div className="search-form">
            <div className="info">
              <div>
                All Type
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
              />
            </div>
            <div className="neighbourhood">
              <div>
                Neighbourhood
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                
              />
            </div>
            <div className="search">
              <FontAwesomeIcon
              icon={faSearch}
              className='search-icon'
              />
            </div>
          </div>
        </motion.div>
      </section>
      {/* Hero section ends */}
    </div>
  </div>
  )
}

export default Header