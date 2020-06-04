
import React, {Component,  KeyboardEvent}  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookGrid from "./grid/BookGrid";
import BookCard from "./grid/BookCard";
import Search from "./Search";

class UserHome extends Component{
  constructor(props) {
    super(props);
  }
  getUserName(pathname){
    var path_arr = pathname.split("/");
    return path_arr[2];
  }
  componentDidMount(){
    
  }
  render (){
    const myName = this.getUserName(this.props.location.pathname);
    return (
      <div>
        <div>Hello {myName}</div>
        <div>
          <Link to="/Home"><button>Explore</button></Link>
        </div>
        <div>
          <BookGrid cols={3}>
          {
            this.state.myBooks.map((bookItem, i) => (
              <BookCard title={bookItem.title} id={bookItem.id} author={bookItem.author} img={bookItem.img} description={bookItem.description} key={i}/>
            ))}
          </BookGrid>
        </div>
      </div>
    )
  }
};
export default UserHome;
