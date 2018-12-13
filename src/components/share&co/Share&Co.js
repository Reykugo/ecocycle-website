import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import t from '../../utils/locales/Locales';
import TextBlock from '../commons/TextBlock';

class ShareCo extends Component {
    render() {
        return (
            <div id="share-co" className="product-block share-co flex-row flex-center">
                <div className="description-container flex-column flex-center">
                    <div className="description">
                        <h1 className="title">{t('SHARE & CO')}</h1>
                        {/*<p className="text">
                            Notre machine SHARE&CO est un nouveau concept alliant publicité, promotions et bien-sûr le recyclage du verre et du plastique.<br /> <br />
                            Le principe est simple : Les grandes marques font de la publicité sur l’écran de notre machine et donnent des bons d’achat aux utilisateurs de l’application &Co Scan qui recyclent leurs bouteilles.<br /><br />
L’utilité est multiple : Les marques adoptent une stratégie RSE, et se donnent une bonne image tout en développant les achats dans leurs points de vente. 
Les utilisateurs, eux, adoptent un geste éco responsable et font des économies chez leurs marques préférées.<br /><br />
En fonction du nombre de bouteilles recyclées, un cumul de point se fait et les utilisateurs peuvent mesurer leur performance dans un classement.
        </p>*/}
                        <TextBlock title="Description" iconClass="fas fa-info" text="share&co-description"/>
                    </div>
                </div>
                <div className="img-container">
                    <img src={require("../../images/share&co_image.gif")} alt="" />
                    {/*<ReactPlayer url='https://www.youtube.com/watch?v=JGwWNGJdvx8' playing />*/}
                </div>
                
            </div>
        );
    }
}

ShareCo.propTypes = {

};

function mapStateToProps(state){
    return{
        lang:state.app.language
    }
}

export default connect(mapStateToProps,{t})(ShareCo);