import React, { Component } from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Team extends Component {
    render() {
        const{img, name, profession, info, FB, Twitter, IG, YouTube} = this.props;
        return(
            <article className="teamMember">
                <figure className="person">
                    {img ? <img src={img} alt="personPic" className='personPic' /> : null}
                        <figcaption className="personInfo">
                            <h4 className="name">{name}</h4>
                            <p className="profession">{profession}</p>
                            <p className="info">{info}</p>
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
                    </figcaption>
                </figure>
            </article>
        );
    }
}

export default Team