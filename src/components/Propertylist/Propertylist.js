import React from 'react'
import './Propertylist.scss'
import { propertyListData } from '../Data/propertyListData'

const Propertylist = () => {
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
        <div className="contents">
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
                            <div className='footer'>
                                <div>
                                    {property.bed}
                                </div>
                                <div>
                                    {property.shower}
                                </div>
                                <div>
                                    {property.size}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="menu">
            <div>First</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>Next</div>
        </div>

    </div>
  )
}

export default Propertylist