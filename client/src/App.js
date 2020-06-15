import React, {Component, KeyboardEvent} from 'react';
import Nav from "./components/layout/Nav";
import Explore from "./components/Explore";
import Book from "./components/Book";
import UserHome from "./components/UserHome";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";

import setAuthToken from "./actions/setAuthToken";
//import setUser from "./actions/loginUser";
import logoutUser from "./actions/logoutUser";
import jwt_decode from "jwt-decode";
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

// Check for token to keep user logged in
const getUser = () => {
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
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
      console.log(decoded.email);
      return decoded.email;
    }
  }
}
class App extends Component {
  //const user = getUser();
  //user = getUser();
  constructor(props) {
    super(props);
    /*
    this.state = {
      user: ""
    }
    */
    //this.setState({user: function(){getUser();}});
  };

  componentDidMount(){
    const user = getUser();
    console.log(user);
    this.setState({user: user.email});
  }

  render(){
    //console.log(this.state.user);
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
          <Route path="/" exact render={(props)=><UserHome user={this.user}/>}/>
          <Route path="/explore" exact render={(props)=><Explore user={this.user}/>}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/book" component={Book} user={this.user}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
