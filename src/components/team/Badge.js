import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import t from '../../utils/locales/Locales';

class Badge extends Component {
    render() {
        return (
            <div className="badge flex-column flex-center">
                <img src={require("../../images/" + this.props.img)}></img>
                <p className="name">{t(this.props.name)}</p>
                <p className="job">{t(this.props.job)}</p>
            </div>
        );
    }
}

function mapStatetoProps(state){
    return{
        lang: state.app.language
    }
}

Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired
}



export default connect(mapStatetoProps, {t})(Badge);