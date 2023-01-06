import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Propertyform.scss'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'

const Propertyform = () => {
  return (
    <div className="form-bg">
        <div className="title">

        </div>
        <div className="form">
            <div className="title">
            </div>
            <form action="">
            <div className="form-control">
                <label htmlFor="name">Name
                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        className="required"
                    />
                </label>
                <input type="text" 
                    placeholder='enter name'
                />
            </div>
            <div className="form-control">
                <label htmlFor="address">Address
                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        className="required"
                    />
                </label>
                <input 
                    type="text" 
                    placeholder='enter address'
                />
            </div>
            <div className="form-control">
                <label htmlFor="unit-number">Unit Number
                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        className="required"
                    />
                </label>
                <input type="text" 
                    placeholder='Enter unit'
                />
            </div>
            <div className="form-control">
                <label htmlFor="city">City
                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        className="required"
                    />
                </label>
                <select name="city" id="">
                    <option value="" disabled>Select City</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Dubai">Dubai</option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="state">State
                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        className="required"
                    />
                </label>
                <select name="state" id="">
                    <option value="" disabled>Select State</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Dubai">Dubai</option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="state">Room Type
                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        className="required"
                    />
                </label>
                <select name="state" id="">
                    <option value="" disabled>Select Room Type</option>
                    <option value="Abuja">Self contained</option>
                    <option value="Dubai">Room and Parlour</option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="price">Price
                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        className="required"
                    />
                </label>
                <input type="text" 
                    placeholder='enter name'
                />
            </div>
            <div className="form-control">
                <label htmlFor="name">Name
                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        className="required"
                    />
                </label>
                <input type="text" 
                    placeholder='enter name'
                />
            </div>
            </form>
        </div>
    </div>
  )
}

export default Propertyform