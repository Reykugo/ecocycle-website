import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import t from '../../utils/locales/Locales';


class TextBlock extends Component {
    render() {
        const{iconClass, title, text} = this.props;
        return (
            <div className="text-block">
                <div className="header flex-row">
                    <i className={iconClass}></i>
                    <h2 className="block-title">{t(title)}</h2>
                </div>
                <p className="text">
                    {t(text)}
                </p>
            </div>
        );
    }
}

TextBlock.propTypes = {
    iconClass:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
};

function mapStateToProps(state){
    return{
        lang:state.app.language
    }
}

export default connect(mapStateToProps, {t})(TextBlock);