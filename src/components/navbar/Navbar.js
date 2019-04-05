import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import t from '../../utils/locales/Locales';
import {setLanguage} from '../../redux/actions/app';
import NavbarLink from './NavbarLink';
import { NavHashLink as Link } from 'react-router-hash-link';

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
                    <Link smooth to="#home">
                        <div className="logo-container" ><img src={require("../../images/logo.png")} alt="logo"></img></div>
                    </Link>
                    <i className="burger fa fa-bars" onClick={this.showNav}></i>
                </div>
                <div id='nav' className="navigation flex-row flex-center grow">
                    <NavbarLink to="#home" label="Home"/>
                    <NavbarLink to="#share-co" label="Share&Co"/>
                    <NavbarLink to="#eco-scan" label="Eco-Scan"/>
                    <NavbarLink to="#application" label="Actualités"/>
                    <NavbarLink to="#about" label="About"/>
                    <div className="item flex-row flex-center" onClick={this.switchLanguage}>
                        {this.props.lang}
                    </div>
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