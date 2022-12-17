import React, { Component } from 'react';
import MainPicture from '../../Components/MainPictureSection';
import MainSection from '../../Components/MainSection';
import Footer from '../../Components/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <MainPicture />
                <MainSection />
                <Footer />
            </div>
        );
    }
}

export default Home