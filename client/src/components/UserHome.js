
import React, {Component,  KeyboardEvent}  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookGrid from "./grid/BookGrid";
import BookCard from "./grid/BookCard";
import Search from "./Search";
import getBooks from "./../actions/getBooks";
import ShowBooks from "./ShowBooks";
import {isEmpty} from 'lodash';

import jwt_decode from "jwt-decode";
//import setAuthToken from "./actions/setAuthToken";
/*
function IsLoading(props){
  const isLoading = props.isLoading;
  if (isLoading){
    return <h1>Loading...</h1>
  }
  return 0;
}
*/
class UserHome extends Component{
  constructor(props) {
    super(props);
    this.state= {
      //user: ()=>{if(this.props.location.state.user == null){return this.props.user}else{return this.props.location.state.user; }},
      //user: this.props.location.state.user,
      user: this.props.user,
      isLoading: true,
      //jsonBookList: {},
    //  myBooks: [book1, book2, book3] //this is an array of objects once populated
      myBooks: []
    }
  }
  /*
  getUserName(pathname){
    var path_arr = pathname.split("/");
    return path_arr[2];
  }
  */
  getName(){
    return this.state.user;
  }
  getUser(){
    if(this.props.location.state.user == null){
      return this.props.user
    }else{
      return this.props.location.state.user;
    }
  }
  loadBooks = (email) => {
    axios.post("/api/users/getBookList", {email: email})
    .then((response) => {
      //console.log(response.data.booklist);
      const bookList = response.data.booklist;
      const books = [];
      for (let i=0; i<bookList.length; i++){
        const bookItem = {
          id: bookList[i].id, //how I will save users books in db.
          title: bookList[i].title,
          author: bookList[i].author,
          description: bookList[i].description,
          img: bookList[i].img
        }
        books.push(bookItem);
      }
      this.setState({myBooks: books});
      this.setState({isLoading: false});
    }).catch(err => {console.log(err);});
  };
  componentDidMount(){
    //this.setState({user: this.props.user});
    //console.log(this.props.user);
    //console.log(this.props.location.state.user);
  //  const userEmail = this.props.location.state.user;
    //this.setState({user: userEmail});
    //const userEmail = this.getUser();
    //this.setState({user: userEmail});

  //  this.loadBooks(this.state.user);
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      //setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      //setUser(decoded);
      //console.log(decoded);
      //App.setState({user: decoded});
      //store.dispatch(setCurrentUser(decoded));
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        //logoutUser();
        console.log("add logout action");

        // Redirect to login
        window.location.href = "./login";
      } else {
        this.setState({user: decoded.email});
        this.loadBooks(decoded.email);
        //console.log(this.state.user);
        //console.log(decoded.email);
        //return decoded.email;
      }
    }
  }
  render (){
    //const myName = this.getName();

    return (
      <div>
        <div>Hello {this.state.user}</div>
        <div>
        </div>
        <div>
        <ShowBooks isLoading={this.state.isLoading} myBooks={this.state.myBooks}/>
        </div>
      </div>
    )
  }
};
export default UserHome;
