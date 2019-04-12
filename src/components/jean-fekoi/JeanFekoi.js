import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import t from '../../utils/locales/Locales';
import TextBlock from '../commons/TextBlock';

class ShareCo extends Component {
    constructor(props){
        super(props)
        this.screens = [
            require('../../images/1.jpg'),
            require('../../images/2.png'),
            require('../../images/3.png'),
            require('../../images/4.png'),
            require('../../images/5.png'),
            require('../../images/6.png'),
            require('../../images/07.png'),
            require('../../images/07.2.png'),
            require('../../images/08.png'),
            require('../../images/09.png'),
            require('../../images/10.png'),
            require('../../images/11.png'),
        ]
        this.state = {
            currentScreen: this.screens[0],
            screenIndex:0
        }
    }

    componentDidMount(){
        let self = this;
        setInterval(() => {
            self.getNewScreen()
        }, 2000);
    }

    getNewScreen(){
        let index = this.state.screenIndex + 1;
        if(index < this.screens.length){
            this.setState({currentScreen: this.screens[index], screenIndex: index});
        }else{
            this.setState({currentScreen: this.screens[0], screenIndex:0});
        }
    }
    render() {
        return (
            <section id="eco-scan" className="product-block eco-scan flex-row flex-center">
                <div className="img-container flex-column flex-center">
                    <div className="smartphone-container">
                        <img className= "smartphone" src={require("../../images/smartphone.png")} alt="" />
                        <img className="screen" src={this.state.currentScreen}/>
                    </div>
                </div>
                <div className="description-container flex-column flex-center">
                    <div className="description">
                        <h1 className="title">{t('Jean-Fekoi?')}</h1>
                        <div className="text">
                            <TextBlock title="Description" iconClass="fa fa-info" text="jeanFekoi-description" />
                            <TextBlock title="Utilité" iconClass="fa fa-plus" text="jeanFekoi-utility" />
                        </div>
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