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
import {listarAnunciosMapa,showBallonMapa,selecionarBalaoMapaAnuncio,selecionarLinhaListagemAnuncio} from './actions';
import MainMapBlock from '../../../componentes/mainMapBlock'
import TableAnuncios from '../../../componentes/tableAnuncios'
import {listarAnunciosMapaSelector,
        alterarLocalidadeMapaFiltroSelector,
        alterarKeyMapaSelector,
        alterarCenterMapaSelector,
        showBallonMapaSelector,
        hoverMarkerIndexSelector,
        hoveredMapRowIndexSelector        
       } from './selectors';


class GeoLocalizacao extends React.PureComponent {

    static propTypes = {
        markers: PropTypes.arrayOf(PropTypes.object),
        localidadeFiltro: PropTypes.object,
        center:PropTypes.object,
        listarAnuncios: PropTypes.func,
        getAnuncios: PropTypes.func,
        handleSubmit: PropTypes.func,
        keyMapa:PropTypes.string,
        onChildClick: PropTypes.func,
<<<<<<< HEAD
        onMarkerHover: PropTypes.func,
        onHoveredRowIndexChange: PropTypes.func,
=======
        onHoveredRowIndexChange:PropTypes.func,
>>>>>>> 721ee30a272de8606691c0a1691c3aa912dd24cf
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
                                      hoverMarkerIndex:hoverMarkerIndexSelector(state),
                                      hoveredMapRowIndex:hoveredMapRowIndexSelector(state),
                                    });

const mapDispatchToProps = (dispatch) => ({   
    listarAnuncios: (lat, lng) => {
        dispatch(listarAnunciosMapa(lat, lng));
    },
    onChildClick:(openBalloonIndex)=> {
        dispatch(showBallonMapa(openBalloonIndex));
    },
    onMarkerHover:(hoveredMapRowIndex)=> {
        dispatch(selecionarBalaoMapaAnuncio(hoveredMapRowIndex));
    },
    onHoveredRowIndexChange:(hoverMarkerIndex)=> {
        dispatch(selecionarLinhaListagemAnuncio(hoverMarkerIndex));
    }
});

GeoLocalizacao = reduxForm({ // eslint-disable-line no-class-assign
    form: GEOLOCALIZACAO_FORM_MAPA,
    enableReinitialize: true
})(GeoLocalizacao);

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocalizacao); // eslint-disable-line no-class-assign