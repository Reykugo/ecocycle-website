import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <footer className="flex-column flex-center">
                <div className="icons flex-row flex-center">
                    <a href="https://www.facebook.com/shareETco/"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.youtube.com/channel/UChBsdgGBK6Er2hsCNN-kblQ"><i className="fa fa-youtube"></i></a>
                </div>
                <p>© 2023 par Eco Cycle.</p>
            </footer>
        );
    }
}

Footer.propTypes = {

};

export default Footer;