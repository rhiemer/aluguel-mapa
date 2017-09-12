import React, { Component } from 'react';

export default function size(component,defaultSize) {
  return DecoratedComponent => class SizeDecorator extends Component {

    static displayName = (DecoratedComponent.displayName || DecoratedComponent.name || 'Component');

    constructor(props, context) {
      super(props, context);
      this.component = component;
      this.state = {
        width: defaultSize && defaultSize.width,
        height: defaultSize && defaultSize.height
      };
      this.initialized_ = true;
    }

    _onResize = () => {
      clearTimeout(this._updateTimer);
      this._updateTimer = setTimeout(this._update, 16);
    }

    _update = () => {
      if (this.initialized_) {
        const node = React.findDOMNode(this.component);
        if (this.state.width !== node.offsetWidth || this.state.height !== node.offsetHeight) {
          this.setState({
            width: node.offsetWidth,
            height: node.offsetHeight
          });
        }
      }
    }

    componentDidMount() {
      this._update();
      window.addEventListener('resize', this._onResize, false);
    }

    componentWillUnmount() {
      this.initialized_ = false;
      window.removeEventListener('resize', this._onResize);
    }

    render() {
      return (
        <DecoratedComponent {...this.props} {...this.state} />
      );
    }
  };
}