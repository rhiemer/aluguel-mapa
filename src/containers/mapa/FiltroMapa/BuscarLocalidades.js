import React, {Component} from 'react';
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
import FontAwesome from 'react-fontawesome';
import {reduxForm} from 'redux-form/immutable';
import {Field} from 'redux-form/immutable';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {HEADER_FORM_MAPA} from './constants';
import {localidadeHeaderMapSelector,alterarLocalidadeMapaFiltroSelector} from './selectors';
import {listarLocalidadeHeader,alterarLocalidadeFiltro} from './actions';
import BuscarLocalidadesAutoComplete from './BuscarLocalidadesAutoComplete'
import {NoSpaceRowBuscarLocalidade} from './styles';

class BuscarLocalidades extends Component {

    static propTypes = {
        localidadeFiltro: PropTypes.object,
        alterarLocalidadeFiltro: PropTypes.func
    };

    constructor() {
        super();
    }  

    render() {
        const {alterarLocalidadeFiltro} = this.props;
        return (
            <FormGroup controlId="formHorizontalEmail">
                <NoSpaceRowBuscarLocalidade>
                    <Col sm={3}>
                        <Field
                            name="mapa.header.pesquisalocalidades"
                            changeLocalidade={alterarLocalidadeFiltro}
                            {...this.props}
                            component={BuscarLocalidadesAutoComplete}/>
                    </Col>                    
                </NoSpaceRowBuscarLocalidade>
            </FormGroup>
        );
    }
}

const mapStateToProps = (state) => ({
      localidadeFiltro: alterarLocalidadeMapaFiltroSelector(state),      
});

const mapDispatchToProps = (dispatch) => ({    
    alterarLocalidadeFiltro: (localidade) => {
        if (localidade)        
        {
          dispatch(alterarLocalidadeFiltro(localidade));
        }  
    },
});

BuscarLocalidades = reduxForm({ // eslint-disable-line no-class-assign
    form: HEADER_FORM_MAPA,
    enableReinitialize: true
})(BuscarLocalidades);

export default connect(mapStateToProps, mapDispatchToProps)(BuscarLocalidades); // eslint-disable-line no-class-assign