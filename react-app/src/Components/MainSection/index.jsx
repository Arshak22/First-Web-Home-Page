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
    hideGallery = (e) => {
        let options = document.getElementsByClassName('option');
        let gallery = document.getElementsByClassName('gallery');
        for(let i = 0; i < 3; i++) {
            gallery[i].classList.add('hidden');
            options[i].classList.remove('active');
        }
        let j = e.target.id;
        gallery[j].classList.remove('hidden');
        options[j].classList.add('active');
    }

    render() {
        return (
            <div className='main'>
                <Welcome />
                <div className='buttons'>
                    <button className='option btn1' id='0' onClick={this.hideGallery}>Pizza</button>
                    <button className='option btn1' id='1' onClick={this.hideGallery}>Salad</button>
                    <button className='option btn1' id='2' onClick={this.hideGallery}>Noodle</button>
                </div>
                <div className='gallery pizzaGallery'>
                    <GalleryArticle img={Pizza1} title="Fusce dictum finibus" text="Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" price="$45 / $55"/>
                    <GalleryArticle img={Pizza2} title="Aliquam sagittis" text="Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" price="$65 / $70"/>
                    <GalleryArticle img={Pizza3} title="Sed varius turpis" text="Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" price="$30.50"/>
                    <GalleryArticle img={Pizza4} title="Aliquam sagittis" text="Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" price="$25.50"/>
                    <GalleryArticle img={Pizza5} title="Maecenas eget justo" text="Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" price="$80.50"/>
                    <GalleryArticle img={Pizza6} title="Quisque et felis eros" text="Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" price="$20 / $40 / $60"/>
                    <GalleryArticle img={Pizza7} title="Sed ultricies dui" text="Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" price="$94"/>
                    <GalleryArticle img={Pizza8} title="Donec porta consequat" text="Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan" price="$15"/>
                </div>
                <div className='gallery saladGallery hidden'>
                    <GalleryArticle img={Pizza4} title="Salad Menu One" text="Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique" price="$25"/>
                    <GalleryArticle img={Pizza3} title="Second Title Salad" text="Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique" price="$30"/>
                    <GalleryArticle img={Pizza5} title="Third Salad Item" text="Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique" price="$45"/>
                    <GalleryArticle img={Pizza1} title="Superior Salad" text="Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique" price="$50"/>
                    <GalleryArticle img={Pizza8} title="Sed ultricies dui" text="Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique" price="$55 / $60"/>
                    <GalleryArticle img={Pizza7} title="Maecenas eget justo" text="Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique" price="$75"/>
                    <GalleryArticle />
                    <GalleryArticle />
                </div>
                <div className='gallery noodleGallery hidden'>
                    <GalleryArticle img={Pizza8} title="Noodle One" text="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." price="$12.50"/>
                    <GalleryArticle img={Pizza7} title="Noodle Second" text="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." price="$15.50"/>
                    <GalleryArticle img={Pizza6} title="Third Soft Noodle" text="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." price="$20.50"/>
                    <GalleryArticle img={Pizza5} title="Aliquam sagittis" text="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." price="$30.25"/>
                    <GalleryArticle img={Pizza4} title="Maecenas eget justo" text="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." price="$35.50"/>
                    <GalleryArticle img={Pizza3} title="Quisque et felis eros" text="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." price="$40.50"/>
                    <GalleryArticle />
                    <GalleryArticle />
                </div>
                <Section image={Mirg} title="Maecenas nulla neque" text="Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis." btnText="Read More" />
            </div>
        );
    }
}

export default MainSection