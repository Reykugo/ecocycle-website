import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import t from '../../utils/locales/Locales';
import { NavHashLink  as Link } from 'react-router-hash-link';

class NavbarLink extends Component {
    render() {
        const {label, to} = this.props;
        return (
            <div className={"item flex-row flex-center "}>
                <Link smooth to={to} activeClassName="active">
                    <div className="content flex-row flex-center">{t(label)}</div>
                </Link>
            </div>
        );
    }
}

NavbarLink.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

function mapStateToProps(state){
    return{
        lang:state.app.language
    }
}

export default connect(mapStateToProps, {t})(NavbarLink);