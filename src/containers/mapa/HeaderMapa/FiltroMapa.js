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
import {Field} from 'redux-form/immutable';
import PropTypes from 'prop-types';
import BuscarLocalidades from './BuscarLocalidades'

export default class FiltroMapa extends Component {

   

    constructor() {
        super();
    }

    render() {
        
        return (
            <Form horizontal>
                <FormGroup controlId="formFiltroMapa">
                    <Col sm={12}>
                        <BuscarLocalidades/>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}