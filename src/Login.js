import React from 'react';
import Inputdata from './Inputdata';
import './style.css';
class Login extends React.Component {

  render() {
    return (
      <div>
        <p>
          {this.props.p}
        </p>
        <Inputdata name="email" type="email" placeholder="Email id">  </Inputdata>
        <Inputdata name="pass" type="password" placeholder="Password">  </Inputdata>
        <center>
          <br></br>
          <div >
            <button onclick="">Sign In</button>
          </div>
        </center>


      </div>

    )
  }

}

export default Login;