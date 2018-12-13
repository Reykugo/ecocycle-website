import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import t from '../../utils/locales/Locales';
import ReactPlayer from 'react-player';

class ShareCo extends Component {
    render() {
        return (
            <div id="share-co" className="product-block share-co flex-row flex-center">
                <div className="description-container flex-column flex-center">
                    <div className="description">
                        <h1 className="title">{t('SHARE & CO')}</h1>
                        <p className="text">
                            Proident proident duis et minim ut do do aliqua sint aliqua. Veniam deserunt dolor dolor in commodo excepteur amet aute anim. Non occaecat laborum reprehenderit dolore adipisicing. Officia ut officia nostrud irure nulla minim. Est officia veniam sit pariatur exercitation.
                        </p>
                    </div>
                </div>
                <div className="img-container">
                    <img src={require("../../images/share&co_image.gif")} alt="" />
                    {/*<ReactPlayer url='https://www.youtube.com/watch?v=JGwWNGJdvx8' playing />*/}
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