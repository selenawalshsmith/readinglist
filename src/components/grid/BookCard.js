import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './card.css';


class Bookcard extends Component {
  render() {
    /*
      return (
        <div className="card">
          <h1>{this.props.myBooks.title}</h1>
        </div>

      )
    */
    return this.props.myBooks.map((book) => (
      <div className="card">
        <h1>{book.title}</h1>
      </div>
    ))
  }
}
/*
const cardStyle ={
  background: "#FF0000",
  color: '#fff',
  padding: '10px',
  fontSize: '25px',
  margin: '30px',
}
*/
Bookcard.propTypes = {
  myBooks: PropTypes.array.isRequired
}
export default Bookcard;
