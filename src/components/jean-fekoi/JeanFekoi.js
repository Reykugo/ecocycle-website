import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from '../../utils/locales/Locales';
import TextBlock from '../commons/TextBlock';

class ShareCo extends Component {
    render() {
        return (
            <section id="eco-scan" className="product-block eco-scan flex-row flex-center">
                <div className="img-container flex-column flex-center">
                    <div className="smartphone-container">
                        <img className= "smartphone" src={require("../../images/smartphone.png")} alt="" />
                        <img className="screen" src={require('../../images/jeanFekoi-home.jpg')}/>
                    </div>
                </div>
                <div className="description-container flex-column flex-center">
                    <div className="description">
                        <h1 className="title">{t('Jean-Fekoi?')}</h1>
                        <p className="text">
                            <TextBlock title="Description" iconClass="fa fa-info" text="jeanFekoi-description" />
                            <TextBlock title="Utilité" iconClass="fa fa-plus" text="jeanFekoi-utility" />
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

ShareCo.propTypes = {

};

function mapStateToProps(state) {
    return {
        lang: state.app.language
    }
}

export default connect(mapStateToProps, { t })(ShareCo);