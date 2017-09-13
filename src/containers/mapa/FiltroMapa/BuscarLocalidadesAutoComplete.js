import React from 'react'
import Autocomplete from 'react-toolbox/lib/autocomplete';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {listarLocalidadeHeader} from '../../../logica/localidades';

export default class BuscarLocalidadesAutoComplete extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      localidade: ''
    };
  }

  static propTypes = {    
    changeLocalidade: PropTypes.func
  };

  _onChange = (value) => {    
    this.setState({localidade:value});
    const {changeLocalidade} = this.props;
    if (changeLocalidade)    
    {
      changeLocalidade(value)
    }
  }

  loadOptions = (value) => {
    return Promise.all(listarLocalidadeHeader(value))
      .then(res => {return {options:res,complete: true}});
  }

  render() {    
    return (<Select.Async
    name="buscarLocalidadesHeaderMapaAutoComplete"
    valueKey="id"
    labelKey="titulo"
    matchPos="any"
    matchProp="any"
    value={this.state.localidade}
    loadOptions={this.loadOptions}
    onChange={this._onChange}
  />)
  }
}
