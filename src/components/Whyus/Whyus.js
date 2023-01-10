import React from 'react'
import './Whyus.scss'
import PoolImage from '../../assets/images/mlc.svg'
import { subData } from '../Data/subData'
import { motion } from 'framer-motion'

const Whyus = () => {
    const transition = {type:'spring', duration : 3}

  return (
    <div className='why-us-bg'>
        <section className="title">
            Minimum living cost takes care of everything
        </section>
        <section className="content">
            <motion.div 
                className="image-content"
                initial ={{opacity: 0, y: -100}}
                transition = {{...transition, duration: 3}}
                whileInView = {{opacity: 1, y: 0 }}
            >
                <img src={PoolImage} alt="" />
            </motion.div>
            <motion.div
                initial ={{opacity: 0, y: -100}}
                transition = {{...transition, duration: 3}}
                whileInView = {{opacity: 1, y: 0 }}
                className="text-content"
            >
                {
                    subData.map((data, idx)=>(
                        <div className="data-box" key={idx}>
                            <div className="data-sign">
                                <img src={data.image} alt="" />
                            </div>
                            <div className="text">
                                {data.content}
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </section>
    </div>
  )
}

export default Whyus