import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {Table,Column} from 'fixed-data-table';

export default class IceFixedTableHolder extends Component {
  static propTypes = {
    cellRenderer: PropTypes.func.isRequired,
    columns: PropTypes.array.isRequired
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    const {cellRenderer, ...other} = this.props;        
    return (
      <Table
        {...other}
        >
        {this.props.columns.map((c, index) => (<Column key={index} cellRenderer={cellRenderer} {...c} />))}
      </Table>
    );
  }
}
