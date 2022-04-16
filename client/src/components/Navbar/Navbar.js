import React, { useState } from 'react'
import './Navbar.css'
import { SiAnaconda } from 'react-icons/si'
import { AiOutlineBars } from 'react-icons/ai'
import { RiCloseLine } from 'react-icons/ri'
import Button from '../Button/Button'
import '../Button/Button.css'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="container navbar">
            <div className="logo">
                <SiAnaconda color="#ffffff" size={33} />
                <p className="logo-text">
                    Social
                    <span>X</span>
                </p>
            </div>
            <menu>
                <ul
                    className="nav-links"
                    id={showMenu ? 'nav-links-mobile' : 'nav-links-mobile-hide'}
                >
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a href="#download">Download</a>
                    </li>
                    <li>
                        <a href="#subscribe">Subscribe</a>
                    </li>
                    <li className="nav-btn">
                        <Button
                            text={'Learn More'}
                            btnClass={'btn-dark'}
                            href={'#faq'}
                        />
                    </li>
                </ul>
            </menu>

            <div className="menu-icons" onClick={toggleMenu}>
                {showMenu ? (
                    <RiCloseLine color="#ffffff" size={30} />
                ) : (
                    <AiOutlineBars color="#ffffff" size={27} />
                )}
            </div>
        </nav>
    )
}

export default Navbar
