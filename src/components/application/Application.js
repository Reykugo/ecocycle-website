import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import t from '../../utils/locales/Locales';
import {connect} from 'react-redux';

class Application extends Component {
    render() {
        return (
            <section id="application" className="flex-column flex-center">
                <h1 className="title">{t("NOS ACTUALITES")} </h1>
                <div className="video-container flex-row flex-center">
                    <ReactPlayer url='https://www.youtube.com/watch?v=6LYePgzFN-E&feature=youtu.be' />
                </div>
            </section>
        );
    }
}

Application.propTypes = {

};
function mapStateToProps(state){
    return{
        lang: state.app.language
    }
}

export default connect(mapStateToProps, {t})(Application);