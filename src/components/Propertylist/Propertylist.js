import React from 'react'
import './Propertylist.scss'
import { propertyListData } from '../Data/propertyListData'
import Bed from '../../assets/icons/bed.svg'
import Shower from '../../assets/icons/shower.svg'
import Size from '../../assets/icons/size.svg'
import { motion } from 'framer-motion'

const Propertylist = () => {

    const transition = {type:'spring', duration : 3}

  return (
    <div className='list-bg'>
        <div className="heading">
            <div className="title">
                List of properties
            </div>
            <div className="btn">
                View all property
            </div>
        </div>
        <motion.div 
            className="contents"
            initial ={{opacity: 0, y: -100}}
            transition = {{...transition, duration: 3}}
            whileInView = {{opacity: 1, y: 0 }}

        >
            {
                propertyListData.map((property, index)=>(
                    <div className="data-box" key={index}>
                        <div className="image">
                            <img src={property.source} alt=''/>
                        </div>
                        <div className="content">
                            <div>{property.address}</div>
                            <div>{property.roomType}</div>
                            <div>{property.rent}</div>
                        </div>
                        <div className='footer'>
                            <div>
                                <img src={Bed} alt="" />
                                {property.bed}
                            </div>
                            <div>
                                <img src={Shower} alt="" />
                                {property.shower}
                            </div>
                            <div>
                                <img src={Size} alt="" />
                                {property.size}
                            </div>
                        </div>
                    </div>
                ))
            }
        </motion.div>
        <div className="menu">
            <div>First</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>Next</div>
        </div>

    </div>
  )
}

export default Propertylist