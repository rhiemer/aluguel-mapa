import React from 'react'
import PropTypes from 'prop-types';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';


export default class AppBarMapa extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  

    render() {        
        return (
            <AppBar title="Mapa de Aluguel" leftIcon="menu"/>
        )
    }
}