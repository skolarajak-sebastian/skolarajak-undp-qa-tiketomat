import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Comp from './Comp';
import Register from './Register';
import Login from './Login';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'User'
    };
  }
onButton=()=>{
  this.setState({
      name:"Walkwel",
                })
}

onButton2=()=>{
  this.setState({
      name:"Technologies",
                })
}

onButton3=()=>{
  this.setState({
      name:"React",
                })
}

  render() {
    return (
      <div class="main">

        <Hello name={this.state.name} />
       
        {/*<Comp onButton={this.onButton} onButton2={this.onButton2} onButton3={this.onButton3}></Comp>*/}
        <Register p="Enter your details to get into magical world!"></Register>
        <Login p="Please Login with Your Credentials"></Login>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
