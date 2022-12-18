import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class AddressBox extends Component {
    render() {
        const{title, text, phone, email, FB, Twitter, IG, YouTube} = this.props;
        return (
            <div className='addressBox'>
                <h4 className='addressTitle'>{title}</h4>
                <address className='addressText'>{text}</address>
                {phone ? <a href="#" target="_blank" rel="noreferrer" className="contact">
                        <FontAwesomeIcon icon={faPhone} className="contactIcon"/>
                        {phone}
                </a> : null}
                {email ? <a href="#" target="_blank" rel="noreferrer" className="contact">
                        <FontAwesomeIcon icon={faEnvelope} className="contactIcon"/>
                        {email}
                </a> : null}
                <div className="socialMedia">
                    {FB ? <a href={FB} target="_blank" rel="noreferrer" className="social">
                        <FontAwesomeIcon icon={faFacebook} className="icon"/>
                    </a> : null}
                    {Twitter ? <a href={Twitter} target="_blank" rel="noreferrer" className="social">
                        <FontAwesomeIcon icon={faTwitter} className="icon"/>
                    </a> : null}
                    {IG ? <a href={IG} target="_blank" rel="noreferrer" className="social">
                        <FontAwesomeIcon icon={faInstagram} target="_blank" className="icon"/>
                    </a> : null}
                    {YouTube ? <a href={YouTube} target="_blank" rel="noreferrer" className="social">
                    <FontAwesomeIcon icon={faYoutube} className="icon"/>
                    </a> : null}
                </div>
            </div>
        );
    }
}

export default AddressBox
