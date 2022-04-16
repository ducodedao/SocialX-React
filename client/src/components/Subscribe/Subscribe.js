import React from 'react'
import './Subscribe.css'
import { TiSocialGooglePlus } from 'react-icons/ti'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Subscribe = () => {
    return (
        <section id="subscribe">
            <div className="container subscribe" data-aos="fade-up">
                <h2>Subscribe now!</h2>
                <form>
                    <div className="form-control">
                        <input type="text" placeholder="Enter Your Email..." />
                        <button>Subscribe</button>
                    </div>
                </form>
                <div className="social-icons">
                    <div className="social-icon">
                        <TiSocialGooglePlus />
                    </div>
                    <div className="social-icon">
                        <FaFacebookF />
                    </div>
                    <div className="social-icon">
                        <FaTwitter />
                    </div>
                    <div className="social-icon">
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe
