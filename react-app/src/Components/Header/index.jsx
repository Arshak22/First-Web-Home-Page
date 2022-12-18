import React, { Component } from 'react';
import './style.css';
import image from '../../assets/images/simple-house-logo.png';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "home"
        }
    }

    handleActive = (e) => {
        this.setState({active: e});
    }

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
                            <li className={`navItem ${this.state.active === "home" ? "activeNav": null}`} onClick={()=>this.handleActive("home")}><Link to="/">Home</Link></li>
                            <li className={`navItem ${this.state.active === "about" ? "activeNav": null}`} onClick={()=>this.handleActive("about")}><Link to="/about">About</Link></li>
                            <li className={`navItem ${this.state.active === "contact" ? "activeNav": null}`} onClick={()=>this.handleActive("contact")}><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header