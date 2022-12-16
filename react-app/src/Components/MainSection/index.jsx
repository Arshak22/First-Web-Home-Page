import React, { Component } from 'react';
import './style.css';

class MainSection extends Component {
    render() {
        return (
            <div className='main'>
                <div>
                    <button className='btn1'>Pizza</button>
                    <button className='btn1'>Salad</button>
                    <button className='btn1'>Noodle</button>
                </div>
                
            </div>
        );
    }
}

export default MainSection