import React from 'react'
import './Offers.scss'
import PicOne from '../../assets/images/flexible-leases.webp'
import PicTwo from '../../assets/images/day-happiness.webp'
import PicThree from '../../assets/images/monthly-house-cleaning.webp'
import PicFour from '../../assets/images/choose-your-roomate.webp'
import { motion } from 'framer-motion'

const Offers = () => {
  return (
    <div className='offers-bg'>
      <section className="section-one">
        <div className="row">
          <motion.div
            whileHover={{ scale: 1.102}}
          >
              <img src={PicOne} alt="bed with stacked pillows" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.102}}
          >
              <img src={PicTwo} alt="Happy man wearing red sweatshirt" />
          </motion.div>
        </div>
        <div className="row">
          <motion.div
            whileHover={{ scale: 1.102}}
          >
              <img src={PicThree} alt="Two sprays for cleaning" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.102}}
          >
              <img src={PicFour} alt="three friends gathered together" />
          </motion.div>
        </div>
      </section>
      <section className="section-two">
          <div className="text-content">
            <h3>
              Flexibility and options to suit your lifestyle.
            </h3>
            <p>
            You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
            </p>
            <div className="btn">
              <button>
                Search Rooms
              </button>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Offers