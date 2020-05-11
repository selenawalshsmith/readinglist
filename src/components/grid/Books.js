import React, {Component} from 'react';
import BookCard from './BookCard';
import App from '../../App';
import PropTypes from 'prop-types';
import {size} from 'lodash';
import './card.css';
/*
var bookList = JSON.stringify(App.state.myBooks);
bookList = JSON.parse(bookList);
var iterator = bookList["items"].values();
*/
class Books extends Component {
  //const bookList = this.props.myBooks.items;
  render() {

    //var x = numKeys(this.props.myBooks.items);

  //  console.dir(this.props.myBooks);
    //console.dir(this.props.myBooks['0']);
    //var bookList = JSON.stringify(this.props.myBooks);
  //  bookList = JSON.parse(bookList);
    //console.log("book list");
  //  console.dir(bookList["0"]); //returns undefined
   //console.dir(bookList.items);
  //  console.log(typeof bookList);//returns object
  //  console.log("book items");
  //  var bookItems = bookList.items;
  //  console.dir(bookItems); //returns Array(6)
  //  console.log(typeof bookItems); //returns object
  //  console.log("/////////////////////////");
  //  console.log(Object.keys(bookList));
  //    console.log("/////////////////////////");
  //    console.log(typeof bookItems); //object
    //console.log("/////////////////////////");
  //  console.log("/////////////////////////");
    //  console.dir(bookList["items"]);
    //  var iterator = bookList["items"].values();
/*
    for (let [key, value] of Object.entries(bookList)){
      console.log(key);
      console.log(value);
    }

    var result = Object.entries(bookList);
    for(var i=0; i < result.length; i++){
      for(var z =0; z < result[i].length; z++){
        console.log(result[i][z]+" ");
      }
      console.log();
    }
    */
  //  console.dir(bookItems[0]);


    //Object.keys(bookItems).map(book => console.log(book));
    //bookItems.map(book => console.log(book));
    //bookList["items"].map(book => console.log(book));

    //let book = JSON.stringify(this.props.myBooks['0']);
    //book = JSON.parse(book);
    //jsonify
   //bookList.items.forEach(book => console.log(book));
  //this.props.myBooks.map(book => console.log(book));
    return(
      <ul>

      </ul>
    )

  }
}
Books.propTypes = {
  myBooks: PropTypes.array.isRequired
}

function numKeys(obj){
  var count=0;
  for (var prop in obj){
    count++;
  }
  return count;
}

export default Books;
