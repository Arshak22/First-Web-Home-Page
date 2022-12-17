import React, { Component } from 'react';
import './style.css';
import Welcome from "../Welcome";
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
                {
                    img: Pizza1,
                    title: "Fusce dictum finibus",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
                    type: "pizza"
                },
                {
                    img: Pizza2,
                    title: "Fusce",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$40",
                    type: "pizza"
                },
                {
                    img: Pizza3,
                    title: "Fusce dictum fins",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$25",
                    type: "pizza"
                },
                {
                    img: Pizza4,
                    title: "Fusce dictum finibus",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$15",
                    type: "pizza"
                },
                {
                    img: Pizza4,
                    title: "Fusce dictum finibus",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$15",
                    type: "pizza"
                },
                {
                    img: Pizza4,
                    title: "Fusce dictum finibus",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$15",
                    type: "pizza"
                },
                {
                    img: Pizza5,
                    title: "Fusce dictum",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
                    type: "salad"
                },
                {
                    img: Pizza6,
                    title: "Fusce dictum",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
                    type: "salad"
                },
                {
                    img: Pizza7,
                    title: "Fusce dictum",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
                    type: "salad"
                },
                {
                    img: Pizza8,
                    title: "Fusce dictum",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
                    type: "salad"
                },
                {
                    img: Pizza4,
                    title: "Fusce dictum",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
                    type: "noodle"
                },
                {
                    img: Pizza2,
                    title: "Fusce dictum",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
                    type: "noodle"
                },
                {
                    img: Pizza1,
                    title: "Fusce dictum",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
                    type: "noodle"
                },
                {
                    img: Pizza3,
                    title: "Fusce dictum",
                    decription: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
                    price: "$45 / $55",
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
                <Welcome />
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