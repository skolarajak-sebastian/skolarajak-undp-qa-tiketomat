import React from 'react';
import Inputdata from './Inputdata'
class Register extends React.Component {

  render() {
    return (
      <div>
        <p>
          {this.props.p}
        </p>
        <Inputdata name="fname" type="name" placeholder="First Name">  </Inputdata>
        <Inputdata name="lname" type="name" placeholder="Last Name">  </Inputdata>
        <Inputdata name="email" type="email" placeholder="Email id">  </Inputdata>
        <Inputdata name="pass" type="password" placeholder="Password">  </Inputdata>
        <Inputdata name="repass" type="password" placeholder="Re-Enter Password">  </Inputdata>
        <center>
          <br></br>
          <div >
            <button onclick="">Sign Up</button>
          </div>
        </center>


      </div>

    )
  }

}

export default Register;