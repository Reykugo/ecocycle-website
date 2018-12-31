import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <footer className="flex-column flex-center">
                <div className="icons flex-row flex-center">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className=""></i></a>
                    <a href="#"><i className=""></i></a>
                </div>
                <p>© 2023 par Eco Cycle.</p>
            </footer>
        );
    }
}

Footer.propTypes = {

};

export default Footer;