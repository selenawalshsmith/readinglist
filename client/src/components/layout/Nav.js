import React, {Component}  from 'react';
import { Link, Redirect } from 'react-router-dom';
import setAuthToken from "../../actions/setAuthToken";
//import { Link } from 'react-router-dom'; //add links for pages
/*
<Link to={{pathname:"/explore", state:{user: this.state.user}}}><button>Explore</button></Link>
<Link to={{pathname:"/explore", state:{user: this.state.user}}}><button>Explore</button></Link>
*/
class Nav extends Component{
  constructor(props) {
    super(props);
    this.state= {
      redirect: ""
    }
  }
  logout(){
    /*
    console.log("hellow");
    if (localStorage.jwtToken) {
      localStorage.removeItem("jwtToken");
      setAuthToken(false);
      this.setState({redirect: "/login"});
    } else {
      console.log("hellow");
      return;
    }
    */
  }
  render(){
    return (
      <div>
        <header style={headerStyle}>
          <Link to='/'>
            <h1>Reading List</h1>
          </Link>
          <Link to='/register'><button style={buttonStyle}>Register</button></Link>
          <Link to='/login'><button style={buttonStyle}>Login</button></Link>
          <button onClick={this.logout} style={buttonStyle}>Logout</button>
          <Link to="/explore"><button>Explore</button></Link>
          <Link to="/"><button>Home</button></Link>
          <div><Redirect to={this.state.redirect}/></div>
        </header>
      </div>
    )
  }
}
const headerStyle ={
  background: "#C6E4EE",
  color: '#152238',
  textAlign: 'left',
  padding: '10px',
  fontSize: '25px',
  width: '100%'
}
const buttonStyle ={

}
export default Nav;
