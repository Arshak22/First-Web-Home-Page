import React, { Component } from 'react';
import './style.css';
import image from '../../assets/images/simple-house-logo.png';
import { NavLink } from "react-router-dom";

class Header extends Component {
     render() {
        return (
            <div className='myHeader'>
                <div className='row innerHeader'>
                    <div className='iconCol'>
                    {image ? <img src={image} alt="header-logo" className='headerLogo' /> : null}
                        <div className='logoText'>
                            <h1 className='title'>Simple House</h1>
                            <h6 className='description'>new restaurant template</h6>
                        </div>
                    </div>
                    <nav className='navCol'>
                        <ul className='nav'>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                    isActive ? "navItem activeNav" : "navItem"
                                    }
                                    >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                    isActive ? "navItem activeNav" : "navItem"
                                    }
                                    >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                    isActive ? "navItem activeNav" : "navItem"
                                    }
                                    >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header