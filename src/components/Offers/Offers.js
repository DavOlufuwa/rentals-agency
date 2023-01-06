import React from 'react'
import './Offers.scss'
import PicOne from '../../assets/images/flexible-leases.png'
import PicTwo from '../../assets/images/day-happiness.png'
import PicThree from '../../assets/images/monthly-house-cleaning.png'
import PicFour from '../../assets/images/choose-your-roomate.png'

const Offers = () => {
  return (
    <div className='offers-bg'>
      <section className="section-one">
        <div className="row">
          <div>
              <img src={PicOne} alt="bed with stacked pillows" />
          </div>
          <div>
              <img src={PicTwo} alt="Happy man wearing red sweatshirt" />
          </div>
        </div>
        <div className="row">
          <div>
              <img src={PicThree} alt="Two sprays for cleaning" />
          </div>
          <div>
              <img src={PicFour} alt="three friends gathered together" />
          </div>
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