import React, { Component } from 'react';
import './style.css';
import Welcome from "../Intro";
import Section from "../Section";
import GalleryArticle from '../GalleryArticle';
import Pizza1 from '../../assets/images/pizza-1.jpg';
import Pizza2 from '../../assets/images/pizza-2.jpg';
import Pizza3 from '../../assets/images/pizza-3.jpg';
import Pizza4 from '../../assets/images/pizza-4.jpg';
import Pizza5 from '../../assets/images/pizza-5.jpg';
import Pizza6 from '../../assets/images/pizza-6.jpg';
import Pizza7 from '../../assets/images/pizza-7.jpg';
import Pizza8 from '../../assets/images/pizza-8.jpg';
import Mirg from "../../assets/images/section-image.jpg";

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                // Pizzas
                {
                    img: Pizza1,
                    title: "Fusce dictum finibus",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
                    type: "pizza"
                },
                {
                    img: Pizza2,
                    title: "Aliquam sagittis",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$65 / $70",
                    type: "pizza"
                },
                {
                    img: Pizza3,
                    title: "Sed varius turpis",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$30.50",
                    type: "pizza"
                },
                {
                    img: Pizza4,
                    title: "Aliquam sagittis",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$25.50",
                    type: "pizza"
                },
                {
                    img: Pizza5,
                    title: "Maecenas eget justo",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$80.25",
                    type: "pizza"
                },
                {
                    img: Pizza6,
                    title: "Quisque et felis eros",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$20 / $40 / $60",
                    type: "pizza"
                },
                {
                    img: Pizza7,
                    title: "Sed ultricies dui",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$94",
                    type: "pizza"
                },
                {
                    img: Pizza8,
                    title: "Donec porta consequat",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$15",
                    type: "pizza"
                },
                // Salads
                {
                    img: Pizza4,
                    title: "Salad Menu One",
                    decription: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$25",
                    type: "salad"
                },
                {
                    img: Pizza3,
                    title: "Second Title Salad",
                    decription: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$30",
                    type: "salad"
                },
                {
                    img: Pizza5,
                    title: "Third Salad Item",
                    decription: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$45",
                    type: "salad"
                },
                {
                    img: Pizza1,
                    title: "Superior Salad",
                    decription: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$50",
                    type: "salad"
                },
                {
                    img: Pizza8,
                    title: "Sed ultricies dui",
                    decription: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$55 / $60",
                    type: "salad"
                },
                {
                    img: Pizza7,
                    title: "Maecenas eget justo",
                    decription: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
                    price: "$75",
                    type: "salad"
                },
                // Noodles
                {
                    img: Pizza8,
                    title: "Noodle One",
                    decription: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$12.50",
                    type: "noodle"
                },
                {
                    img: Pizza7,
                    title: "Noodle Secons",
                    decription: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$15.50",
                    type: "noodle"
                },
                {
                    img: Pizza6,
                    title: "Third Soft Noodle",
                    decription: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$20.50",
                    type: "noodle"
                },
                {
                    img: Pizza5,
                    title: "Aliquam sagittis",
                    decription: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$30.25",
                    type: "noodle"
                },
                {
                    img: Pizza4,
                    title: "Maecenas eget justo",
                    decription: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$35.50",
                    type: "noodle"
                },
                {
                    img: Pizza3,
                    title: "Quisque et felis eros",
                    decription: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                    price: "$40.50",
                    type: "noodle"
                }                
            ],
            active: null,
            filterList: []
        }
    }

    componentDidMount() {
        this.filterOptions("pizza");
    }

    filterOptions = (a) => {
        this.setState({filterList: this.state.list.filter(x => x.type === a)});
        this.setState({active: a});
    }

    render() {
        return (
            <div className='main'>
                <Welcome title="Welcome to Simple House" text="Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites."/>
                <div className='buttons'>
                    <button className={`btn1 ${this.state.active === "pizza" ? "active": null}`} onClick={()=>this.filterOptions("pizza")}>Pizza</button>
                    <button className={`btn1 ${this.state.active === "salad" ? "active": null}`} onClick={()=>this.filterOptions("salad")}>Salad</button>
                    <button className={`btn1 ${this.state.active === "noodle" ? "active": null}`} onClick={()=>this.filterOptions("noodle")}>Noodle</button>
                </div>
                <div className='gallery'>
                    {this.state.filterList.map((elem, index)=> {
                        return <GalleryArticle key={index} img={elem.img} title={elem.title} text={elem.decription} price={elem.price}/>
                    })}
                </div>
                <Section image={Mirg} title="Maecenas nulla neque" text="Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis." btnText="Read More" />
            </div>
        );
    }
}

export default MainSection