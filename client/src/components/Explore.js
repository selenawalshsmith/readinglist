import React, {Component, KeyboardEvent} from 'react';
import axios from 'axios';
import BookGrid from "./grid/BookGrid";
import BookCard from "./grid/BookCard";
import Search from './Search';

class Explore extends Component{
  constructor(props) {
    super(props);
    this.state = {
      //user: this.props.location.state.user,
      myBooks: [],
      searchQuery: "empty"
    }
  }
  getInitialBookList = () => {
  fetch('https://www.googleapis.com/books/v1/users/105309221066047026022/bookshelves/1001/volumes')
    .then(response => response.json())
    .then((responsedata) => {
    //  console.log(responsedata.items);
      const bookList = [];
      for(var i=0; i < responsedata.items.length; i++){
        const bookItem = {
          id: responsedata.items[i].id, //how I will save users books in db.
          title: responsedata.items[i].volumeInfo.title,
          author: responsedata.items[i].volumeInfo.authors,
          description: responsedata.items[i].volumeInfo.description,
          img: responsedata.items[i].volumeInfo.imageLinks.thumbnail
        }
        bookList.push(bookItem);
      }
      //console.log(bookList);
      this.setState({myBooks: bookList});
    }).catch(function (error){
      console.log(error);
    //console.log("fail");
  });
 };
 componentDidMount(){
    this.getInitialBookList();
    //console.log(this.props.location.state.user);
    //this.setState({user: this.props.user});
  }

  //document.getElementbyId
  performSearch = (event: KeyboardEvent<HTMLInputElement>, searchQuery ) => {
    if(event.key === 'Enter'){
       fetch('https://www.googleapis.com/books/v1/volumes?q='+searchQuery)
        .then(response => response.json())
        .then((responsedata) => {
            console.log(responsedata.items);
            const bookList = [];
            for(var i=0; i < responsedata.items.length; i++){
              const bookItem = {
                id: responsedata.items[i].id,
                title: responsedata.items[i].volumeInfo.title,
                author: responsedata.items[i].volumeInfo.authors,
                description: responsedata.items[i].volumeInfo.description,
                img: responsedata.items[i].volumeInfo.imageLinks.thumbnail
              }
              bookList.push(bookItem);
            }
            //console.log(bookList);
            this.setState({myBooks: bookList});
         }).catch(function (error){
            console.log(error);
            //console.log("fail");
        });
    }
  }
  render (){
    return (
      <div className="container">
        <Search performSearch={this.performSearch} searchQuery={this.state.searchQuery}/>
        <h1> Hello {this.state.user}</h1>
        <BookGrid cols={3}>
        {
          this.state.myBooks.map((bookItem, i) => (
            <BookCard title={bookItem.title} id={bookItem.id} author={bookItem.author} img={bookItem.img} description={bookItem.description} key={i}/>
          ))}
        </BookGrid>
      </div>
    )
  }
}

export default Explore;