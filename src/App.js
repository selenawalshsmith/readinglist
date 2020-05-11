import React, {Component} from 'react';
import axios from 'axios';
import Nav from "./components/layout/Nav";
import BookGrid from "./components/grid/BookGrid";
import BookCard from "./components/grid/BookCard";
import Books from "./components/grid/Books";
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <Nav/>
      <BookGrid/>
    </div>
  );
}
*/
class App extends Component {
  state = {
    myBooks: []
      /*
      {
        id: 1,
        title: "Be Here Now",
        author: "Ram Dass",
        img: '/img/BeHereNow.png'
      },
      {
        id: 2,
        title: "Mandalas",
        author: "Carl Jung",
        img: '/img/BeHereNow.png'
      },
      {
        id: 3,
        title: "Mists of Avalon",
        author: "Marion Zimmer Bradley",
        img: '/img/MistsOfAvalon.png'
      },
      {
        id: 4,
        title: "The Giver",
        author: "Lois Lowry",
        img: '/img/TheGiver.png'
      },
      {
        id: 5,
        title: "The Book",
        author: "Alan Watts",
        img: '/img/TheBook.png'
      }
      */
  }
  componentDidMount(){
    var key='AIzaSyAUiO51_Ibao2w1ThiUOG1RSufiHmmQ_jE';
    axios.get('https://www.googleapis.com/books/v1/users/105309221066047026022/bookshelves/1001/volumes')
      .then((response) => {
        //var bookList = JSON.stringify(response.data);
      //  bookList = JSON.parse(bookList);
        this.setState({myBooks: response.data});
      })
      .catch(function (error){
        console.log(error);
      })
  }
  render(){
    //var myState= this.state.myBooks;
    //let x = this.state.myBooks["items"];
    const bookItems = this.state.myBooks.items;
  //  const bookInfo = this.state.myBooks.items["volumeInfo"];
    return (
      <div className="App">
        <Nav/>

              <Books myBooks={this.state.myBooks}/>
              <ul>
                {console.dir(this.state.myBooks.items)}
              </ul>
      </div>
    )
  }
}
export const flattenObject = (obj) => {
  const flattened = {}

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key]))
    } else {
      flattened[key] = obj[key]
    }
  })

  return flattened
}

export default App;
