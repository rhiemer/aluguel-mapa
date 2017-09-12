import React from 'react';
import {reduxForm} from 'redux-form/immutable';
import {Field} from 'redux-form/immutable';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {LISTAR_ANUNCIOS_MAPA} from '../constants';
import {listarAnunciosMapaSelector} from './selectors';
import {listarAnunciosMapa} from './actions';
import MainMapBlock from '../../../componentes/mainMapBlock'
import TableAnuncios from '../../../componentes/tableAnuncios'

class GeoLocalizacao extends React.PureComponent {

    static propTypes = {
        markers: PropTypes.arrayOf(PropTypes.object),
        listarAnuncios: PropTypes.func,
        getAnuncios: PropTypes.func,
        handleSubmit: PropTypes.func
    };

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {        
        const {listarAnuncios,markers,getAnuncios,handleSubmit} = this.props;
        return (

            <form onSubmit={handleSubmit}>
                <div>
                <div>  
                    <div
                        style={{
                        width: '100%',
                        height: '400px'
                    }}>
                    <Field name="mapa.geoLocalizacao" {...this.props} component={MainMapBlock}/> 
                    </div>
                    <button type="submit">Listar Localidades</button>
                    </div>   
                    <Field name="tabela.geoLocalizacao" {...this.props} component={TableAnuncios}/>                
                </div>
            </form>            
        );
    }
}

const mapStateToProps = (state) => ({      
    markers: listarAnunciosMapaSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: () => {
        const filtro = {
            latitude: 59.95,
            longitudade: 30.33
        };
        dispatch(listarAnunciosMapa(filtro.latitude, filtro.longitudade));
    },
    listarAnuncios: (latitude, longitude) => {
        dispatch(listarAnunciosMapa(latitude, longitude));
    }
});

GeoLocalizacao = reduxForm({ // eslint-disable-line no-class-assign
    form: LISTAR_ANUNCIOS_MAPA,
    enableReinitialize: true
})(GeoLocalizacao);

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocalizacao); // eslint-disable-line no-class-assign