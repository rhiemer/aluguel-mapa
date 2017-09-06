import React, {Component} from 'react';
import HeaderMapa from './HeaderMapa'
import GeoLocalizacao from './GeoLocalizacao'

export default class Mapa extends Component {


    render() {       
        return (
            <div id="navbar-wrapper">
                <header>
                    <HeaderMapa/>                    
                </header>
                <div style={{width: '100%', height: '400px'}}>
                   <GeoLocalizacao/>
                </div>                
            </div>
        );
    }
}
