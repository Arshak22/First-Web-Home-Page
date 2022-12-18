import React, { Component } from 'react';
import './style.css';
import Intro from "../Intro";
import AddressBox from '../AddressBox';
import Map from '../Map';


class ContactMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Our Address",
            text: "180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550",
            phone: "080-090-0110",
            email: "info@company.co",
            FB: "https://www.facebook.com/",
            Twitter: "https://twitter.com/",
            IG: "https://www.instagram.com/",
            YouTube: "https://www.youtube.com/"
        }
    }

    render() {
        return (
            <div className='main'>
                <Intro title="Contact Page" text="You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template." />
                <div className='formAndInfo'>
                    <div className='column'>
                        <form action="#" className='contactForm'>
                            <div className='formGroup'>
                                <input type="text" name='name' className='formInpt' placeholder='Name' required />
                            </div>
                            <div className='formGroup'>
                                <input type="email" name='email' className='formInpt' placeholder='Email' required />
                            </div>
                            <div className='formGroup'>
                                <textarea name="message" rows="5" placeholder='Message' className='formInpt' required></textarea>
                            </div>
                            <div className='formGroup formBtn'>
                                <button type='submit' className='btn3 green right'>Send</button>
                            </div>
                        </form>
                    </div>
                    <div className='column'>
                        <AddressBox title={this.state.title} text={this.state.text} phone={this.state.phone} email={this.state.email} FB={this.state.FB} Twitter={this.state.Twitter} IG={this.state.IG} YouTube={this.state.YouTube} />
                    </div>
                </div>
                <Map />
                <Intro title="FAQs" text="This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666" />
            </div>
        );
    }
}

export default ContactMain
