import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {HashLink as Link} from 'react-router-hash-link';

class Home extends Component {

    componentDidMount(){
        document.getElementById('hero-video').play();
    }

    render() {
        return (
            <section id="home">
                {/*<div className="transparence-filter"></div>*/}
                <video muted loop id="hero-video" >
                    <source src={require("../../videos/Hero.mp4")} type="video/mp4" />
                </video>
                <Link smooth to="#share-co">
                    <div className="next-arrow">
                        <i className="fa fa-chevron-down"></i>
                    </div>
                </Link> 
            </section>
        );
    }
}

Home.propTypes = {

};

export default Home;