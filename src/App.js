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
        const bookList = [];
        for(var i=0; i < response.data.items.length; i++){
          const bookItem = {
            id: response.data.items[i].id,
            title: response.data.items[i].volumeInfo.title,
            author: response.data.items[i].volumeInfo.authors
          }
          bookList.push(bookItem);
        }
        this.setState({myBooks: bookList});

      //  var bookList = JSON.stringify(response.data); //turns json to a string
      //  bookList = JSON.parse(bookList); //turns json string into a js object?
        //this.setState({myBooks: bookList});

        //getData(response.data).then(jsonData => this.setState({myBooks: jsonData}));
      })
      .catch(function (error){
        console.log(error);
      })
  }
  render(){
    //var myState= this.state.myBooks;
    //let x = this.state.myBooks["items"];
    //const bookItems = this.state.myBooks.items;
  //  const bookInfo = this.state.myBooks.items["volumeInfo"];
/*
  console.log("testing this.state.myBooks");
  console.dir(this.state.myBooks); // Object
  console.dir(this.state.myBooks[0]); //undefined
  console.dir(this.state.myBooks.items); // key = "items" Value = Array(6)
  console.log("typeof this.state.myBooks.items:");
  console.log(typeof this.state.myBooks.items); //object
  //console.dir(this.state.myBooks.items[0]); //cannot read prop "0" of undefined.
  //items value still needs to be extracted from the json?
  console.log("/////////////////////////");

  //Yet, when I use stringify and parse it says a "cross origin error was thrown"
  // which im pretty sure it means it cant read the undefined JSON
  // Another note: I tried using JUST JSON.parse() to turn it to a js object but
  // it also didn't work

  const bookItems = JSON.stringify(this.state.myBooks.items);
  bookItems = JSON.parse(bookItems);
*/
console.dir(this.state.myBooks);
console.log();

 this.state.myBooks.map((bookItem) => console.log(bookItem.title));
  //this.state.myBooks[bookArray].map((book) => console.log(book)); //Cannot Read property "map" of undefined
 //const bookList = this.state.myBooks.items;
 //bookList.map.((book) => console.log(book));



    return (
      <div className="App">
        <Nav/>

              <Books myBooks={this.state.myBooks}/>
              <ul>
                {}
              </ul>
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
