import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import t from '../../utils/locales/Locales';
import {setLanguage} from '../../redux/actions/app';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.switchLanguage = this.switchLanguage.bind(this)
    }

    switchLanguage(){
        let lang = ""
        this.props.lang === "FR"? lang = "EN": lang="FR" 
        this.props.setLanguage(lang)
    }

    render() {
        return (
            <nav id="navbar" className="navigation-container flex-row ">
                <div className="logo-container"><img src="http://pluspng.com/img-png/eco-png-eco-logo-1417.png" alt="logo"></img></div>
                <div className="navigation flex-row grow">
                    <div className="item"><a href="#home" className="">{t('Home')}</a></div>
                    <div className="item"><a href="#share-co" className="">{t('Share&Co')}</a></div>
                    <div className="item"><a href="#eco-scan" className="">{t('Eco-Scan')}</a></div>
                    <div className="item"><a href="#about" className="">{t('About')}</a></div>
                </div>
                <div className="item" onClick={this.switchLanguage}>{this.props.lang}</div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    
};

function mapStateToProps(state){
    return{
        lang: state.app.language
    }
}
export default connect(mapStateToProps, {t, setLanguage})(Navbar);