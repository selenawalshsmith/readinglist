import React, {Component, KeyboardEvent} from 'react';
import Nav from "./components/layout/Nav";
import Home from "./components/Home";
import Book from "./components/Book";
import UserHome from "./components/UserHome";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";

import setAuthToken from "./actions/setAuthToken";
import logoutUser from "./actions/logoutUser";
import jwt_decode from "jwt-decode";
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  //store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    //logoutUser();
    console.log("add logout action");

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/book" component={Book}/>
          <Route path="/user" component={UserHome}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
