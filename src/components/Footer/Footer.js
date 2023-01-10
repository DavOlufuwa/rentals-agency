import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faPhone , faPrint } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <div className='footer-bg'>
        <hr />
        <section className="section-one">
            <div className="logo-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="#292F33" d="M1.537 24.962a.75.75 0 0 0 0 1.5h18v-1.5h-18zm33.671-7.955h-12.5v1.5h12.5a.75.75 0 0 0 0-1.5z"/><path fill="#FFCC4D" d="m23.216 9.624l5.742-5.742l5.743 5.742v7.383H23.216z"/><path fill="#292F33" d="M34.701 10.445c-.21 0-.42-.08-.58-.24l-5.162-5.162l-5.162 5.162a.82.82 0 0 1-1.16-1.16l5.742-5.742a.82.82 0 0 1 1.16 0l5.742 5.742a.82.82 0 0 1-.58 1.4z"/><path fill="#662113" d="M27.318 11.265h3.281v5.742h-3.281z"/><path fill="#F4511E" d="M24.857 11.265h1.641v1.641h-1.641zm6.562 0h1.641v1.641h-1.641zm0 2.461h1.641v1.641h-1.641z"/><path fill="#FFCC4D" d="m10.537 5.259l-8.296 8.296v11.407h16.592V13.555z"/><path fill="#292F33" d="M19.87 15.629c-.265 0-.531-.101-.733-.304l-8.6-8.6l-8.6 8.6a1.036 1.036 0 1 1-1.466-1.466l9.333-9.333a1.036 1.036 0 0 1 1.466 0l9.333 9.333a1.036 1.036 0 0 1-.733 1.77z"/><path fill="#662113" d="M8.463 15.629h4.148v9.333H8.463z"/><path fill="#F4511E" d="M4.315 15.629h3.111v3.111H4.315zm0 4.148h3.111v3.111H4.315z"/><path fill="#FFE8B6" d="M21.477 8.438L10.954 18.995v14.519H32V18.995z"/><path fill="#66757F" d="M33 33.008H10c-.552 0-1 .449-1 1.003c0 .554.448 1.003 1 1.003h23c.552 0 1-.449 1-1.003c0-.554-.448-1.003-1-1.003z"/><path fill="#FFCC4D" d="M21 19h1v14h-1z"/><path fill="#F4511E" d="M14 27h4v6h-4z"/><path fill="#55ACEE" d="M14 20h4v4h-4zm11 0h4v4h-4zm0 7h4v4h-4z"/><path fill="#66757F" d="M21 19.603a.999.999 0 0 1-.707-1.707l6.5-6.5l1.414 1.414l-6.5 6.5a.993.993 0 0 1-.707.293z"/><path fill="#66757F" d="M32.884 19.603c-.265 0-.531-.101-.733-.304L21.477 8.625L10.803 19.299a1.036 1.036 0 1 1-1.466-1.466L20.744 6.426a1.036 1.036 0 0 1 1.466 0l11.407 11.407a1.036 1.036 0 0 1-.733 1.77z"/></svg>
            </div>
            <div className="details">
                <div className="address">
                    <FontAwesomeIcon 
                        icon={faLocationDot}
                        className="icons"
                    />
                    345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                </div>
                <div className="phone">
                    <div            className="telephone">
                        <FontAwesomeIcon
                            icon={faPhone}
                            className="icons"
                        />
                        (123) 456-7890
                    </div>
                    <div className="fax">
                        <FontAwesomeIcon
                            icon={faPrint}
                            className="icons"
                        />
                        (123) 456-7890
                    </div>
                </div>
                <div className="socials">
                    <p>
                        Social Media
                    </p>
                    <div className="icons">
                        <Icon
                            icon="carbon:logo-facebook"
                            className='socials-icon'
                        />
                        <Icon
                            icon="uil:twitter"
                            className='socials-icon'
                        />
                        <Icon
                            icon="jam:linkedin"
                            className='socials-icon'
                        />
                        <Icon
                            icon="bi:youtube"
                            className='socials-icon'
                        />
                        <Icon
                            icon="ion:logo-instagram"
                            className='socials-icon'
                        />
                        <Icon
                            icon="mdi:google-plus"
                            className='socials-icon'
                        />
                        <Icon
                            icon="bi:pinterest"
                            className='socials-icon'
                        />
                        <Icon
                            icon="ic:baseline-rss-feed"
                            className='socials-icon'
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className="section-two">
            <div className="links">
                <ul>
                    <li>
                        About us
                    </li>
                    <li>
                        Contact us
                    </li>
                    <li>
                        Help
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Disclaimer
                    </li>
                </ul>
            </div>
            <div className="copywright">
                Copywright &copy; 2020 Minimumlivingcost. All rights reserved
            </div>
        </section>
    </div>
  )
}

export default Footer