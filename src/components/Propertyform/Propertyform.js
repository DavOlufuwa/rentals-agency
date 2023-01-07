import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Propertyform.scss'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from 'react-dropzone'

const Propertyform = () => {

    // Image upload code
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
          return
        },
      });
    // Image upload code


  return (
    <div className="form-bg">
        <div className="title">
            Your property with us and be Confident that Your Room will be Filled Out!
        </div>
        <div className="form">
            <div className="form-title">
                Add A New Property
            </div>
            <form action="" className='property-form'>
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
                    <option value="">Select City</option>
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
                    <option value="">Select State</option>
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
                    <option value="">Select Room Type</option>
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
                    placeholder='enter price'
                />
            </div>
            <div className="form-control">
                <label htmlFor="state">Room Type
                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        className="required"
                    />
                </label>
                <select name="state" id="">
                    <option value="">Select Room Type</option>
                    <option value="Abuja">Self contained</option>
                    <option value="Dubai">Room and Parlour</option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="description">Description
                    <FontAwesomeIcon
                        icon={faStarOfLife}
                        className="required"
                    />
                </label>
                <textarea name="description" placeholder='Enter Description'>
                    
                </textarea>
            </div>
            <div className="form-control-upload">
                <label htmlFor="upload">
                    upload files
                </label>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or <span>Browse</span> </p>
                    <p>Supported JPG, JPEG, PNG</p>
                </div>
            </div>
            </form>
            <div className="btn">
                <button>
                    Add New Property
                </button>
            </div>
        </div>
    </div>
  )
}

export default Propertyform