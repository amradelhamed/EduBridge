import React from 'react';
import { FaArrowRight } from "react-icons/fa"

function Header() {
    return <header id='header'>
        <nav className='navbar'>
            <a href="#" className="logo">
                EduBridge
            </a>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#courses">Courses</a>
                </li>
                <li>
                    <a href="#reviews">Reviews</a>
                </li>
                <li>
                    <a href="#footer">Contact</a>
                </li>
            </ul>
            <div className="account">
                <a href="#join-us">Login</a>
                <a href="#join-us" className='btn-join'>
                    Join Us
                    <FaArrowRight/>
                </a>
            </div>
        </nav>
    </header>
}

export default Header;