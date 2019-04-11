import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import t from '../../utils/locales/Locales';
import Badge from './Badge';

class Team extends Component {
    render() {
        return (
            <div id="team" className= "flex-column flex-center">
                <h1 className="title">{t("About")} </h1>
                <div className = "team-badges flex-row flex-center">
                    <Badge 
                        img="sarah.jpg"
                        name="Sarah SELLAM"
                        job="Financial Manager"
                    />
                    <Badge 
                        img="yasmina.jpg"
                        name="Yasmina ARROUM"
                        job="Public relation officer"
                    />
                    <Badge 
                        img="baptiste.png"
                        name="Baptiste Revereau"
                        job= "Artistic Director"
                    />
                    <Badge 
                        img="kim.jpg"
                        name="Kimberley OHANA"
                        job="Lead Team Project"
                    />
                    <Badge 
                        img="guillaume.jpg"
                        name="Guillaume NOUGIER"
                        job="Lead developper"
                    />
                    <Badge 
                        img="graham.jpg"
                        name="Graham Henderson"
                        job="Developper"
                    />

                </div>
            </div>
        );
    }
}

Team.propTypes = {

};

function mapStateToProps(state){
    return {
        lang: state.app.language
    }
}

export default connect(mapStateToProps, {t})(Team);