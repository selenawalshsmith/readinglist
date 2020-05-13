import React, {Component} from 'react';
import BookCard from './BookCard';
import App from '../../App';
import PropTypes from 'prop-types';
import {size} from 'lodash';
import './card.css';


class Books extends Component {

  render() {
    return this.props.myBooks.map((bookItem, i) => (
      <BookCard title={bookItem.title} id={bookItem.id} author={bookItem.author} img={bookItem.img} description={bookItem.description} key={i}/>
    ));
  }
}
Books.propTypes = {
  myBooks: PropTypes.array.isRequired
}

export default Books;
