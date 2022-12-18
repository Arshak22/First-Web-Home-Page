import React, { Component } from 'react';
import './style.css';

class Section extends Component {   
    render() {
        const{image, title, text, btnText} = this.props
        return (
            <div className='section'>
                <div className='columnLeft'>
                {image ? <img src={image} alt="mirg" /> : null}
                </div>
                <div className='columnRight'>
                    <h1 className='leftText sectionTitle'>{title}</h1>
                    <p className='leftText grey'>{text}</p>
                    <button className='btn2 rightBtn'>{btnText}</button>
                </div>
            </div>
        );
    }
}

export default Section