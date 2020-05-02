import React, {Component} from 'react';


class Bookcard extends Component {
  render() {
      return (
        <div style={cardStyle}>
        </div>

      )
  }
}
const cardStyle ={
  background: "#FF0000",
  color: '#fff',
  padding: '10px',
  fontSize: '25px',
  margin: '30px',
}

export default Bookcard;
