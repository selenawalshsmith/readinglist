import React, {Component, KeyboardEvent} from 'react';
import axios from 'axios';
import BookGrid from "./grid/BookGrid";
import BookCard from "./grid/BookCard";
import Search from './Search';

class Home extends Component{
  state = {
    myBooks: [],
    searchQuery: "empty"
  }
  componentDidMount(){
    axios.get('https://www.googleapis.com/books/v1/users/105309221066047026022/bookshelves/1001/volumes')
      .then((response) => {
        const bookList = [];
        for(var i=0; i < response.data.items.length; i++){
          //let imageUrl = URL.createObjectURL(response.data.items[i].volumeInfo.previewLink);
          const bookItem = {
            id: response.data.items[i].id,
            title: response.data.items[i].volumeInfo.title,
            author: response.data.items[i].volumeInfo.authors,
            description: response.data.items[i].volumeInfo.description,
            img: response.data.items[i].volumeInfo.imageLinks.thumbnail
          }
          bookList.push(bookItem);
        }
        this.setState({myBooks: bookList});
      })
      .catch(function (error){
        console.log(error);
      })
  }
  //document.getElementbyId
  performSearch = (event: KeyboardEvent<HTMLInputElement>, searchQuery ) => {
    if(event.key === 'Enter'){

      axios.get('https://www.googleapis.com/books/v1/volumes?q='+searchQuery)
      .then((response) => {
        const bookList = [];
        for(var i=0; i < response.data.items.length; i++){
          //let imageUrl = URL.createObjectURL(response.data.items[i].volumeInfo.previewLink);
          const bookItem = {
            id: response.data.items[i].id,
            title: response.data.items[i].volumeInfo.title,
            author: response.data.items[i].volumeInfo.authors,
            description: response.data.items[i].volumeInfo.description,
            img: response.data.items[i].volumeInfo.imageLinks.thumbnail
          }
          bookList.push(bookItem);
        }
        this.setState({myBooks: bookList});
      })
      .catch(function (error){
        console.log(error);
      })
          //console.log(searchQuery);
    }
  }
  render (){
    return (
      <div className="container">
        <Search performSearch={this.performSearch} searchQuery={this.state.searchQuery}/>
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

export default Home;
