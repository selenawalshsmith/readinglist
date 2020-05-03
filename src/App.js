import React, {Component} from 'react';
import Nav from "./components/layout/Nav";
import BookGrid from "./components/grid/BookGrid"
import BookCard from "./components/grid/BookCard"
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
    myBooks: [
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
    ]
  }
  render(){
    console.log(this.state.myBooks);
    return (
      <div className="App">
        <Nav/>
              <BookGrid cols={3} myBooks={this.state.myBooks} key={this.state.myBooks.id}>
                  <BookCard myBooks={this.state.myBooks}/>
              </BookGrid>
      </div>
    )
  }
}

export default App;
