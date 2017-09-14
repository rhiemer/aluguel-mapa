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
import {listarAnunciosMapaSelector,alterarLocalidadeMapaFiltroSelector} from './selectors';
import {listarAnunciosMapa} from './actions';
import MainMapBlock from '../../../componentes/mainMapBlock'
import TableAnuncios from '../../../componentes/tableAnuncios'

class GeoLocalizacao extends React.PureComponent {

    static propTypes = {
        markers: PropTypes.arrayOf(PropTypes.object),
        localidadeFiltro: PropTypes.object,
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
        const {listarAnuncios, markers, getAnuncios,localidadeFiltro,handleSubmit} = this.props;
        console.log(`renderMapa=${JSON.stringify(localidadeFiltro)}`);
        return (
            <Form onSubmit={handleSubmit} horizontal>
                <FormGroup controlId="formGeoLocalizacao">
                    <Button type="submit" bsStyle="primary">Listar Localidades</Button>
                    <Col sm={12}>
                        <FormGroup controlId="formGeoLocalizacaoMapaLista" onSubmit={handleSubmit}>
                            <NoSpaceRowGeoLocalizacao>
                                <ColMapa sm={9}>
                                    <Field name="mapa.geoLocalizacao" {...this.props} component={MainMapBlock}/>
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
                                      localidadeFiltro: alterarLocalidadeMapaFiltroSelector(state)
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
    form: GEOLOCALIZACAO_FORM_MAPA,
    enableReinitialize: true
})(GeoLocalizacao);

export default connect(mapStateToProps, mapDispatchToProps)(GeoLocalizacao); // eslint-disable-line no-class-assign