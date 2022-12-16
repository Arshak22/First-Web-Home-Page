import React, { Component } from 'react';
import './style.css';

class GalleryArticle extends Component {
    render() {
        const{img, title, text, price} = this.props
        return (
            <article className='myArticle'>
                <figure>
                {img ? <img src={img} alt="articlePic" className='articlePic' /> : null}
                    <figcaption>
                        <h4 className='figureTitle'>{title}</h4>
                        <p className='figureDesc'>{text}</p>
                        <p className='figurePrice'>{price}</p>
                    </figcaption>
                </figure>
            </article>
        );
    }
}

export default GalleryArticle