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
import {HEADER_FORM_MAPA} from '../constants';
import {localidadeHeaderMapSelector} from '../selectors';
import {listarLocalidadeHeader} from '../actions';
import BuscarLocalidadesAutoComplete from './BuscarLocalidadesAutoComplete'

class BuscarLocalidades extends Component {

    static propTypes = {
        listaLocalidade: PropTypes.arrayOf(PropTypes.object),
        listarLocalidade: PropTypes.func,
        handleSubmit: PropTypes.func
    };

    constructor() {
        super();
    }

    render() {
        const {handleSubmit, listarLocalidade, listaLocalidade} = this.props;
        return (
            <FormGroup controlId="formHorizontalEmail" onSubmit={handleSubmit}>
                <Col sm={6}>
                    <Field
                        name="mapa.header.pesquisalocalidades"
                        {...this.props}
                        component={BuscarLocalidadesAutoComplete}/>
                </Col>
                <Col sm={6}>
                    <Button type="submit" bsStyle="primary"><FontAwesome name="search"/></Button>
                </Col>
            </FormGroup>
        );
    }
}

const mapStateToProps = (state) => ({listaLocalidade: localidadeHeaderMapSelector(state)});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: () => {
        const filtro = "General";
        dispatch(listarLocalidadeHeader(filtro));
    },
    listarLocalidade: (filtro) => {        
        dispatch(listarLocalidadeHeader(filtro));
    }
});

BuscarLocalidades = reduxForm({ // eslint-disable-line no-class-assign
    form: HEADER_FORM_MAPA,
    enableReinitialize: true
})(BuscarLocalidades);

export default connect(mapStateToProps, mapDispatchToProps)(BuscarLocalidades); // eslint-disable-line no-class-assign