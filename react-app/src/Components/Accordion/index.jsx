import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretLeft } from '@fortawesome/free-solid-svg-icons';


class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: faCaretLeft
        }
    }

    handleActive = (e) => {
        if(e.target.nextElementSibling) {
            e.target.nextElementSibling.classList.toggle('activeContent');
            e.target.classList.toggle('activeAccordion');
        } else if(e.target.parentElement.nextElementSibling) {
            e.target.parentElement.nextElementSibling.classList.toggle('activeContent');
            e.target.parentElement.classList.toggle('activeAccordion');
        } else {
            e.target.parentElement.parentElement.nextElementSibling.classList.toggle('activeContent');
            e.target.parentElement.parentElement.classList.toggle('activeAccordion');
        }

        if(e.target.classList.contains('activeAccordion') || e.target.parentElement.classList.contains('activeAccordion') ||  e.target.parentElement.parentElement.classList.contains('activeAccordion')) {
            this.setState({icon: faCaretDown});
        } else {
            this.setState({icon: faCaretLeft});
        }
    }

    render() {
        const{title, content} = this.props;
        return (
            <>
                <button className='accordion' onClick={this.handleActive}>{title} <FontAwesomeIcon icon={this.state.icon} className="accordionIcon"/> </button>
                <div className='panel'>
                    <p>{content}</p>
                </div>
            </>
        );
    }
}

export default Accordion
