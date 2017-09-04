import React from 'react'
import Autocomplete from 'react-toolbox/lib/autocomplete';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default class BuscarLocalidadesAutoComplete extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      tituloLocalidade: ''
    };
  }

  static propTypes = {
    listaLocalidade: PropTypes.arrayOf(PropTypes.object),
    listarLocalidade: PropTypes.func
  };

  handleChange = (value) => {
    this.setState({tituloLocalidade: value});
    console.log("Selected: " + JSON.stringify(value));
  };

  blurChange = (value) => {    
    console.log(value)
    //this.props.listarLocalidade(value);
  };

  options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
  ]; 
  

  render() {
    const {listaLocalidade,listarLocalidade,tituloLocalidade} = this.props;
    return (<Select
      multi={false}
      name="form-field-name"
      labelKey="label"
      valueKey="value"
      value={this.state.tituloLocalidade}
      onChange={this.handleChange}      
      options={this.options}  
      onBlur={this.blurChange}    
      />)
  }
}
