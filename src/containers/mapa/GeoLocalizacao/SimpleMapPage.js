/*
 * Base Google Map example
 */
import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => (
  <div
    style={{
    position: 'relative',
    color: 'white',
    background: 'red',
    height: 40,
    width: 60,
    top: -20,
    left: -30
  }}>
    {text}
  </div>
);

export default class SimpleMapPage extends Component {

  static propTypes = {
    listaAnuncios: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    const {center,zoom,listaAnuncios} = this.props;
    return (      
      <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={JSON.stringify(listaAnuncios)}/>
      </GoogleMapReact>
    );
  }
}