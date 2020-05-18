import React, {Component}  from 'react';
import { Link } from 'react-router-dom'; //add links for pages
import BookCard from "./grid/BookCard";
import Home from "./Home";
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//console.log(Bookcard.props);

class Book extends Component{

constructor(props) {
  super(props);
  this.state={book:''}
}
//console.log(this.router.props);
  render (){
  //  console.log(.props);
  //console.log(Router.consumer.context.location);
    return (
      <div>
      <h1>Book Page</h1>
      </div>
    )
  }
}

export default Book;
