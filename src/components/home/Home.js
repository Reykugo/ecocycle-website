import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

    componentDidMount(){
        document.getElementById('hero-video').play();
    }

    render() {
        return (
            <div id="home">
                {/*<div className="transparence-filter"></div>*/}
                <video muted loop id="hero-video" >
                    <source src={require("../../videos/Hero.mp4")} type="video/mp4" />
                </video>
                {/*<div className="presentation">
                    <h1 className="title">Eco cycle</h1>
                    <p className="mantra">
                        Aliquip tempor labore labore aute et elit commodo minim tempor labore reprehenderit.
                    </p>
                </div>*/}
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;