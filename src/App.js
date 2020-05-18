import React, {Component, KeyboardEvent} from 'react';
import Nav from "./components/layout/Nav";
import Home from "./components/Home";
import Book from "./components/Book";
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/books" component={Book}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
