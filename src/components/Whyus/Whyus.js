import React from 'react'
import './Whyus.scss'
import PoolImage from '../../assets/images/mlc.svg'
import { subData } from '../Data/subData'

const Whyus = () => {
  return (
    <div className='why-us-bg'>
        <section className="title">
            Minimum living cost takes care of everything
        </section>
        <section className="content">
            <div className="image-content">
                <img src={PoolImage} alt="" />
            </div>
            <div className="text-content">
                {
                    subData.map((data, idx)=>(
                        <div className="data-box" key={idx}>
                            <div className="data-sign">
                                <div className="sign">
                                    <img src={data.image} alt="" />
                                </div>
                            </div>
                            <div className="text">
                                {data.content}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default Whyus