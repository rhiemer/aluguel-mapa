import React from 'react'
import Autocomplete from 'react-toolbox/lib/autocomplete';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {listarLocalidadeHeader} from '../logica';

export default class BuscarLocalidadesAutoComplete extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      localidade: ''
    };
  }

  static propTypes = {
    listaLocalidade: PropTypes.arrayOf(PropTypes.object),
    listarLocalidade: PropTypes.func
  };

  updateStorageType = (value) => {
    this.setState({localidade:value});    
  }

  getTypesOptions = (value) => {
    return Promise.all(listarLocalidadeHeader(value))
      .then(res => {return {options:res,complete: true}});
  }

  render() {
    const {listaLocalidade, listarLocalidade, tituloLocalidade} = this.props;
    return (<Select.Async
    name="buscarLocalidadesHeaderMapaAutoComplete"
    valueKey="id"
    labelKey="titulo"
    matchPos="any"
    matchProp="any"
    value={this.state.localidade}
    loadOptions={this.getTypesOptions}
    onChange={this.updateStorageType}
  />)
  }
}
