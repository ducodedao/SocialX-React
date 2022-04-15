import React, { useState } from 'react'
import './Navbar.css'
import { SiAnaconda } from 'react-icons/si'
import { AiOutlineBars } from 'react-icons/ai'
import { RiCloseLine } from 'react-icons/ri'

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
                        <a href="#Home">Home</a>
                    </li>
                    <li>
                        <a href="#Features">Features</a>
                    </li>
                    <li>
                        <a href="#Download">Download</a>
                    </li>
                    <li>
                        <a href="#Subscribe">Subscribe</a>
                    </li>
                    <li className="nav-btn">
                        <a href="#GetStarted" className="btn btn-dark">
                            Get Started
                        </a>
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
