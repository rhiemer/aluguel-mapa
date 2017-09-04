import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {reduxForm} from 'redux-form/immutable';
import {Field} from 'redux-form/immutable';
import {connect} from 'react-redux';
import {Navbar, FormGroup, Button} from 'react-bootstrap'
import BuscarLocalidadesAutoComplete from '../../../componentes/buscarLocalidadesAutoComplete'
import {HEADER_FORM_MAPA} from '../constants';
import {localidadeHeaderMapSelector} from '../selectors';
import {listarLocalidadeHeader} from '../actions';
import PropTypes from 'prop-types';

class HeaderMapa extends Component {

    static propTypes = {
        listaLocalidadeHeader: PropTypes.func,
        listarLocalidadeHeader: PropTypes.func,
        handleSubmit: PropTypes.func
    };

    render() {
        const {handleSubmit, listarLocalidadeHeader, listaLocalidadeHeader} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Navbar fixedTop fluid>

                    <Navbar.Header >
                        <Navbar.Brand>
                            <a href="#">Mapa de Alugueis</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>

                    <Navbar.Collapse >
                        <Navbar.Form pullLeft>
                            <FormGroup >
                                <Field
                                    name="mapa.header.pesquisalocalidades"
                                    {...this.props}
                                    listaLocalidades={listarLocalidadeHeader}
                                    component={BuscarLocalidadesAutoComplete}/>
                            </FormGroup>
                            {' '}
                            <Button type="submit" bsStyle="primary"><FontAwesome name="search"/></Button>
                        </Navbar.Form>
                    </Navbar.Collapse>

                </Navbar>
            </form>

        );
    }
}

const mapStateToProps = (state) => ({listaLocalidadeHeader: localidadeHeaderMapSelector(state)});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: () => {
        const filtro = "General";
        dispatch(listarLocalidadeHeader(filtro));
    },
    listarLocalidadeHeader: (filtro) => {
        dispatch(listarLocalidadeHeader(filtro));
    }
});

HeaderMapa = reduxForm({ // eslint-disable-line no-class-assign
    form: HEADER_FORM_MAPA,
    enableReinitialize: true
})(HeaderMapa);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMapa); // eslint-disable-line no-class-assign