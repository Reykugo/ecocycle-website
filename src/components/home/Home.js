import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {HashLink as Link} from 'react-router-hash-link';

class Home extends Component {

    videoIsVisible(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.bottom >= 0
        );
    }


    playVideo(self){
        let video = document.getElementById('hero-video');
        if(self.videoIsVisible(video)){
            video.play();
        }else{
            video.pause()
        }
    }


    componentDidMount(){
        window.addEventListener('scroll',() => this.playVideo(this));
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