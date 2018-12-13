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

    showNav(e){
        e.preventDefault();
        let nav = document.getElementById('nav')
        if (nav.className === "navigation flex-row grow"){
            nav.className += " opened"
        }else{
            nav.className = "navigation flex-row grow";
        }
    }

    render() {
        return (
            <nav id="navbar" className="navigation-container flex-row flex-center flex-start">
                <div className="navbar-header">
                    <div className="logo-container"><img src={require("../../images/logo.png")} alt="logo"></img></div>
                    <i className="burger fa fa-bars" onClick={this.showNav}></i>
                </div>
                <div id='nav' className="navigation flex-row flex-center grow">
                    <div className="item flex-row flex-center"><a href="#home" className="">{t('Home')}</a></div>
                    <div className="item flex-row flex-center"><a href="#share-co" className="">{t('Share&Co')}</a></div>
                    <div className="item flex-row flex-center"><a href="#eco-scan" className="">{t('Eco-Scan')}</a></div>
                    <div className="item flex-row flex-center"><a href="#about" className="">{t('About')}</a></div>
                    <div className="item flex-row flex-center" onClick={this.switchLanguage}><a href="#">{this.props.lang}</a></div>
                </div>
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