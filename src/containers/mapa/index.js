import React, {Component} from 'react';
import HeaderMapa from './HeaderMapa'
import GeoLocalizacao from './GeoLocalizacao'
import FiltroMapa from './HeaderMapa/FiltroMapa'

export default class Mapa extends Component {


    render() {       
        return (
            <div id="navbar-wrapper">
                <header>
                    <HeaderMapa/>                    
                </header>
                <div>
                    <FiltroMapa/>
                </div>    
                <div style={{paddingLeft:'31px'}}>
                   <GeoLocalizacao/>
                </div>                
            </div>
        );
    }
}
