import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import t from '../../utils/locales/Locales';
import TextBlock from '../commons/TextBlock';

class ShareCo extends Component {
    componentDidMount() {
        document.getElementById('share-co_video-ext').play();
    }
    render() {
        return (
            <div id="share-co" className="product-block share-co flex-row flex-center">
                <div className="description-container flex-column flex-center">
                    <div className="description">
                        <h1 className="title">{t('SHARE & CO')}</h1>
                        <TextBlock title="Description" iconClass="fas fa-info" text="share&co-description"/>
                        <TextBlock title="Principe" iconClass="fas fa-info" text="share&co-purpose"/>
                        <TextBlock title="Utilité" iconClass="fas fa-info" text="share&co-utility"/>
                    </div>
                </div>
                <div className="video-container">
                    {/*<img src={require("../../images/share&co_image.gif")} alt="" />*/}
                    <video muted loop id="share-co_video-ext" >
                        <source src={require("../../videos/machine-ext.mp4")} type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    }
}

ShareCo.propTypes = {

};

function mapStateToProps(state){
    return{
        lang:state.app.language
    }
}

export default connect(mapStateToProps,{t})(ShareCo);