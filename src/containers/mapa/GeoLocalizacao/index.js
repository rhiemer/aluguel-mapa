import React from 'react';
import {reduxForm} from 'redux-form/immutable';
import {Field} from 'redux-form/immutable';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Grid,
    Row,
    Col,
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
    Panel,
    Button
} from 'react-bootstrap';

import {NoSpaceRowGeoLocalizacao,ColMapa} from './styles';
import {GEOLOCALIZACAO_FORM_MAPA} from './constants';
import {listarAnunciosMapa,showBallonMapa} from './actions';
import MainMapBlock from '../../../componentes/mainMapBlock'
import TableAnuncios from '../../../componentes/tableAnuncios'
import {listarAnunciosMapaSelector,
        alterarLocalidadeMapaFiltroSelector,
        alterarKeyMapaSelector,
        alterarCenterMapaSelector,
        showBallonMapaSelector} from './selectors';


class GeoLocalizacao extends React.PureComponent {

    static propTypes = {
        markers: PropTypes.arrayOf(PropTypes.object),
        localidadeFiltro: PropTypes.object,
        center:PropTypes.object,
        listarAnuncios: PropTypes.func,
        getAnuncios: PropTypes.func,
        handleSubmit: PropTypes.func,
        keyMapa:PropTypes.string
    };

    static defaultProps = {
        mapaPosicao: {
            center:{  
                lat: 59.938043,
                lng: 30.337157
            },
            zoom:11
         },
         keyMapa:''
    };

    render() {                
        const propsMapa = Object.assign({},this.props,this.props.mapaPosicao);          
        return (
            <Form horizontal>
                <FormGroup controlId="formGeoLocalizacao">                    
                    <Col sm={12}>
                        <FormGroup controlId="formGeoLocalizacaoMapaLista">
                            <NoSpaceRowGeoLocalizacao>
                                <ColMapa sm={9}>
                                    <Field name="mapa.geoLocalizacao" {...propsMapa} component={MainMapBlock}/>
                                </ColMapa>
                                <Col sm={3}>
                                    <Field name="tabela.geoLocalizacao" {...this.props} component={TableAnuncios}/>
                                </Col>
                            </NoSpaceRowGeoLocalizacao>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
                                      markers: listarAnunciosMapaSelector(state),
                                      localidadeFiltro: alterarLocalidadeMapaFiltroSelector(state),
                                      mapaPosicao:alterarCenterMapaSelector(state),
                                      keyMapa:alterarKeyMapaSelector(state),
                                      openBallonIndex:showBallonMapaSelector(state),
                                    });

const mapDispatchToProps = (dispatch) => ({   
    listarAnuncios: (lat, lng) => {
        dispatch(listarAnunciosMapa(lat, lng));
    },
    onChildClick:(openBalloonIndex)=> {
        dispatch(showBallonMapa(openBalloonIndex));
    },
    onCloseClick:(openBalloonIndex)=> {
        dispatch(showBallonMapa(openBalloonIndex));
    } 
});

GeoLocalizacao = reduxForm({ // eslint-disable-line no-class-assign
    form: GEOLOCALIZACAO_FORM_MAPA,
    enableReinitialize: true
})(GeoLocalizacao);

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocalizacao); // eslint-disable-line no-class-assign