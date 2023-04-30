import React from 'react';
// import Comptwo from './Comptwo'

class Compone extends React.Component {

  constructor() {
    super();
    this.state = {
      num: "",
    }
  }







  render() {

    return (

      <div>
        <div>
          <button onClick={this.props.onButton} >Click</button>
        </div>
        <br></br>
        <div>
          <button onClick={this.props.onButton2} >Click2</button>
        </div>
        <br></br>
        <div>


          <br></br>

          <button onClick={this.props.onButton3} >Click3</button>
        </div>
      </div>



    )
  }


}

export default Compone;