import React, { Component, useState } from 'react';
import './style.css';
import Intro from "../Intro";
import AddressBox from '../AddressBox';
import Map from '../Map';
import Accordion from '../Accordion';

export default function ContactMain() {
        const [addressInfo, setAddressInfo] = useState(
                {
                    title: "Our Address",
                    text: "180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550",
                    phone: "080-090-0110",
                    email: "info@company.co",
                    FB: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/",
                    IG: "https://www.instagram.com/",
                    YouTube: "https://www.youtube.com/"
                });
        const [FAQs, setFAQs] = useState([
            {
                title: "1. Fusce eu lorem et dui #09C maximus varius?",
                content: "#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat."
            },
            {
                title: "2. Vestibulum #999 ante ipsum primis in faucibus orci?",
                content: "Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta."
            },
            {
                title: "3. Um erat. Lorem ipsum dolor sit amet consectetur?",
                content: "Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis."
            },
            {
                title: "4. Ut ac erat sit amet neque efficitur faucibus et in lectus?",
                content: "Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim."
            }
        ]);


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
                        <AddressBox title={addressInfo.title} text={addressInfo.text} phone={addressInfo.phone} email={addressInfo.email} FB={addressInfo.FB} Twitter={addressInfo.Twitter} IG={addressInfo.IG} YouTube={addressInfo.YouTube} />
                    </div>
                </div>
                <Map />
                <Intro title="FAQs" text="This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666" />
                <div className='Accordion'>
                    {FAQs.map((elem, index)=> {
                        return <Accordion key={index} title={elem.title} content={elem.content} />
                    })}
                </div>
            </div>
        );
}