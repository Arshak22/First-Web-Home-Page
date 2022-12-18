import React, { Component } from 'react';
import './style.css';

class Section2 extends Component {   
    render() {
        const{image, title, text1, text2} = this.props
        return (
            <div className='section section2'>
                <div className='columnLeft'>
                {image ? <img src={image} alt="kitchen" /> : null}
                </div>
                <div className='columnRight'>
                    <h1 className='leftText sectionTitle big'>{title}</h1>
                    <p className='leftText grey'>{text1}</p>
                    <p className='leftText grey'>{text2}</p>
                </div>
            </div>
        );
    }
}

export default Section2