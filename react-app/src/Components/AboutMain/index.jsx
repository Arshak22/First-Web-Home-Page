import React, { Component } from 'react';
import './style.css';
import About from "../Intro";
import Team from '../Team';
import Services from '../Services';
import Section2 from '../Section-2';
import Person1 from "../../assets/images/person-1.jpg";
import Person2 from "../../assets/images/person-2.jpg";
import Person3 from "../../assets/images/person-3.jpg";
import Person4 from "../../assets/images/person-4.jpg";
import Kitchen from "../../assets/images/kitchen.jpg";

class AboutMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamList: [
                {
                    img: Person1,
                    name: "Jennifer Soft",
                    profession: "Founder and CEO",
                    info: "Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.",
                    FB: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/",
                    IG: "https://www.instagram.com/"
                },
                {
                    img: Person2,
                    name: "Daisy Walker",
                    profession: "Executive Chef",
                    info: "Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.",
                    FB: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/"
                },
                {
                    img: Person3,
                    name: "Florence Nelson",
                    profession: "Kitchen Manager",
                    info: "Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.",
                    FB: "https://www.facebook.com/",
                    IG: "https://www.instagram.com/"
                },
                {
                    img: Person4,
                    name: "Valentina Martin",
                    profession: "Culinary Director",
                    info: "Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.",
                    FB: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/",
                    IG: "https://www.instagram.com/",
                    YouTube: "https://www.youtube.com/" 
                }
            ]
        }
    }

    render() {
        return (
            <div className='main'>
                <About title="About Simple House" text="This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect."/>
                <div className="team">
                    {this.state.teamList.map((elem, index)=> {
                        return <Team key={index} img={elem.img} name={elem.name} profession={elem.profession} info={elem.info} FB={elem.FB} Twitter={elem.Twitter} IG={elem.IG} YouTube={elem.YouTube}/>
                    })}
                </div>
                <div className='aboutPic'></div>
                <Services text1="Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante." text2="Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget." text3="Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit." />
                <Section2 image={Kitchen} title="History of our restaurant" text1="Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue." text2="Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis." />
            </div>
        );
    }
}

export default AboutMain