import React, { Component } from 'react';
import './style.css';
import image from '../../assets/images/simple-house-logo.png';

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
                            <li className='navItem'>Home</li>
                            <li className='navItem'>About</li>
                            <li className='navItem'>Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header