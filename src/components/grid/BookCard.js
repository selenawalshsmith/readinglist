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

    return this.props.myBooks.map((book) => (
      <div className="card">
        <h1>{book.title}</h1>
      </div>
        ))
      */
      //const {id, title, author, img} = this.props.myBooks;
      //const title = this.props.myBooks
      //document.getElementById("x").src = img;
      //var book_image = img;
      //const {id, title} = this.props.bookItem;
      return(
        <div className="card">
              <img src={this.props.img}/>
              <h1 className="card-title">{this.props.title}</h1>
              <p>By {this.props.author}</p>
        </div>
      )
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
/*
Bookcard.propTypes = {
  myBooks: PropTypes.object.isRequired
}
*/
export default Bookcard;
