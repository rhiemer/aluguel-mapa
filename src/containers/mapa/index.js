import React, {Component} from 'react';
import HeaderMapa from './HeaderMapa'
import MainMapPageMapa from './GeoLocalizacao'

export default class Mapa extends Component {


    render() {       
        return (
            <div id="navbar-wrapper">
                <header>
                    <HeaderMapa/>
                    <MainMapPageMapa/>
                </header>
            </div>
        );
    }
}
