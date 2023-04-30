import React from 'react';
import './style.css'

class Inputdata extends React.Component {

    onHandleInput = (key, value) => {
    this.setState({
      [key]: value,
    })

  }

  render() {
    return (
      <div>
        <center>
        <div>
          <input name={this.props.name} type={this.props.type} onchange={(e) => this.onHandleInput()} placeholder={this.props.placeholder} />
        </div>
        </center>
      </div>

    )
  }

}

export default Inputdata;