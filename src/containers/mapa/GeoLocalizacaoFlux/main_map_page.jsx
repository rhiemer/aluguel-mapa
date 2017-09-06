import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { Connector } from 'react-redux-connector';
import { bindActionCreators } from 'redux';

import MainMapLayout from './main_map_layout.jsx';
import IceTable from './ice_table.jsx';
import MainMapBlock from './main_map_block.jsx';
import * as allMapActions from './map_actions.js';

// slice actions to support map and table interfaces
const mapActions = (({ changeBounds: onBoundsChange, markerHoverIndexChange: onMarkerHover, showBallon: onChildClick}) => ({
    onBoundsChange, onMarkerHover, onChildClick
}))(allMapActions);


const tableActions = (({ tableHoveredRowIndexChange: onHoveredRowIndexChange, tableVisibleRowsChange: onVisibleRowsChange, showBallon: onRowClick}) => ({
    onHoveredRowIndexChange, onVisibleRowsChange, onRowClick
}))(allMapActions);


export default class MainMapPage extends React.PureComponent {
  static propTypes = {
    layout: PropTypes.string
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  _renderMap() {
    return (
      <MainMapBlock size={10}/>
    );
  }

  _renderTable() {
    return (
      <IceTable/>
    );
  }

  render() {
    return (
      <MainMapLayout layout={this.props.layout} renderMap={this._renderMap} renderTable={this._renderTable} />
    );
  }
}

