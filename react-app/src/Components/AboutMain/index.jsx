import React, { Component } from 'react';
import './style.css';
import About from "../Intro";
import Team from '../Team';
import Person1 from "../../assets/images/person-1.jpg";
import Person2 from "../../assets/images/person-2.jpg";
import Person3 from "../../assets/images/person-3.jpg";
import Person4 from "../../assets/images/person-4.jpg";

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
            </div>
        );
    }
}

export default AboutMain