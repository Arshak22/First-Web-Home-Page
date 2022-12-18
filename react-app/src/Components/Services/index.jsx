import React, { Component } from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faSeedling, faCocktail } from '@fortawesome/free-solid-svg-icons';

class Services extends Component {
    render() {
        const{text1, text2, text3} = this.props;
        return(
            <div className="services">
                <div className="col">
                    <FontAwesomeIcon icon={faPepperHot} className="serviceIcon"/>
                    <p className="serviceDesc">{text1}</p>
                    <a href="#" target="_blank" rel="noreferrer">
                        <button className="btn3 blue">Read More</button>
                    </a>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faSeedling} className="serviceIcon"/>
                    <p className="serviceDesc">{text2}</p>
                    <a href="#" target="_blank" rel="noreferrer">
                        <button className="btn3 green">Read More</button>
                    </a>
                </div>
                <div className="col">
                    <FontAwesomeIcon icon={faCocktail} className="serviceIcon"/>
                    <p className="serviceDesc">{text3}</p>
                    <a href="#" target="_blank" rel="noreferrer">
                        <button className="btn3 red">Read More</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Services