import React, {Component} from 'react'
import AppBarMapa from './AppBarMapa'
import FiltroMapa from '../FiltroMapa'

export default class HeaderMapa extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    render() {
        return (
            <div>
                <AppBarMapa/>                                
            </div>
        );
    }
}
