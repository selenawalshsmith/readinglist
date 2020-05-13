import React, {Component} from 'react';
import axios from 'axios';
import Nav from "./components/layout/Nav";
import BookGrid from "./components/grid/BookGrid";
import BookCard from "./components/grid/BookCard";
import Books from "./components/grid/Books";
import Search from './components/Search'
import './App.css';

class App extends Component {
  state = {
    myBooks: []
  }
  componentDidMount(){
    var key='AIzaSyAUiO51_Ibao2w1ThiUOG1RSufiHmmQ_jE';
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
  render(){
    //console.dir(this.state.myBooks);


    this.state.myBooks.map((bookItem) => console.log(bookItem.img));

    return (
      <div className="App">
        <Nav/>
          <Search/>
          <BookGrid cols={3} myBooks={this.state.myBooks}>
            <Books myBooks={this.state.myBooks}/>
          </BookGrid>
      </div>
    )
  }
}
const getData = (data) => {
  var bookList = JSON.stringify(data);
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(JSON.parse(bookList))
    })
  )
}


export default App;
