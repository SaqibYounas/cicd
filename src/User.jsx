import React, { Component } from 'react';

class Helo extends Component {
  constructor() {
    super();
    this.state = {
      isOn: true
    };
    this.handle = this.handle.bind(this);
  }

  handle() {
    this.setState((prevState) => ({
      isOn: !prevState.isOn
    }));
  }

  componentDidMount() {
    console.log("Helo");
  }

  componentDidUpdate() {
    console.log("Helo update");
  }

  componentWillUnmount(){
        console.log("Helo update 2");

  }
  render() {
    return (
      <>
        <button onClick={this.handle}>
          {this.state.isOn ? 'ON' : 'OFF'}
        </button>
      </>
    );
  }
}

export default Helo;
