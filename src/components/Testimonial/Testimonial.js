import React, { useState } from 'react'
import './Testimonial.scss'
import { testimonials } from '../Data/testimonials'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import testVideo from '../../assets/video/short_video.mp4'
import quotes from '../../assets/images/quotashin.png'

const Testimonial = () => {

    const [selected, setSelected] = useState(0)
    const [play, setPlay] = useState(true)
    
    const playVideo = () => {
        document.getElementById("video-playing").play()
    };

    const pauseVideo = () => {
      document.getElementById('video-playing').pause()
    };
    
    const videoFunc = () => {
        play ? playVideo() : pauseVideo()
        setPlay(prevPlay => !prevPlay)
    }

    
  return (
    <div className='testimonial-bg'>
        <section className="section-one">
            <div className="comma">
                <img src={quotes} alt="" />
            </div>
            <div className="slide-container">
                <div className="testimony">
                    {testimonials[selected].testimony}
                </div>
                <div className="details">
                    <div className="img">
                        <img src={testimonials[selected].image} alt={testimonials[selected].title} />
                    </div>
                    <div className="bio-data">
                        <p>
                            {testimonials[selected].title}
                        </p>
                        <p>
                            {testimonials[selected].description}
                        </p>
                    </div>
                </div> 
                <div className="dots">
                    {
                        testimonials.map((testimony, indexNum)=>(
                            <div key={indexNum}>
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    className={
                                        indexNum === selected ? "active-dot" : "inactive-dot"
                                    }
                                    onClick={()=>setSelected(indexNum)}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        <section className="section-two">
        <div className="video" >
            <video  id='video-playing'>
                <source src={testVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div
                onClick={videoFunc}
            >
                <FontAwesomeIcon
                    icon={play ? faPlay : faPause}
                    className="videoButton"
                />
            </div>
        </div>
        </section>
    </div>
  )
}

export default Testimonial