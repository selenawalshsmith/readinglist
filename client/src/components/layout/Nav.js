import React from 'react';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom'; //add links for pages


function Nav(){
  return (
    <div>
      <header style={headerStyle}>
        <Link to='/'>
          <h1>Reading List</h1>
        </Link>
        <Link to='/register'><button style={buttonStyle}>Register</button></Link>
        <button style={buttonStyle}>Login</button>
      </header>
    </div>
  )
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
