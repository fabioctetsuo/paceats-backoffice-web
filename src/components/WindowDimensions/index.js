import React, { Component } from 'react';

export default function WindowDimensions(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = { width: 0, height: 0 };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
      const { width, height } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          windowWidth={width}
          windowHeight={height}
          isMobileSized={width < 769}
        />
      );
    }
  };
}
