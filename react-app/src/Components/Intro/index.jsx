import React, { Component } from 'react';
import './style.css';

class Intro extends Component {
    render() {
        const{title, text} = this.props;
        return (
            <div className='intro'>
                <h1 className='title'>{title}</h1>
                <p className='introDescription'>{text}</p>
            </div>
        );
    }
}

export default Intro