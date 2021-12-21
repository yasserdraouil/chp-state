import React, { Component } from 'react'
import './App.css';
import Counter from './Components/Counter';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggle = () => {
    this.setState({show: !this.state.show})
  }


  render() {
    return (
      <div>
        <h1>Ws React State</h1>
        <button onClick={this.toggle}>toggle</button>
        {this.state.show ? <Counter /> : null}
      </div>
    )
  }
}