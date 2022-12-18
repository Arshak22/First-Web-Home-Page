import React, { Component } from 'react';
import './style.css';

class Map extends Component {
    render() {
        return (
            <div className='map'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.339610511783!2d-43.37684352480814!3d-23.011299541614317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdba9d8681bdf%3A0xdc64f968d5531dee!2zQXYuIEzDumNpbyBDb3N0YSwgNzY3NiAtIEJhcnJhIGRhIFRpanVjYSwgUmlvIGRlIEphbmVpcm8gLSBSSiwg0JHRgNCw0LfQuNC70LjRjw!5e0!3m2!1sru!2s!4v1671364767761!5m2!1en!2s" 
                    width="900" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        );
    }
}

export default Map
