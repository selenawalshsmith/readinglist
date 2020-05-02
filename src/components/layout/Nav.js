import React from 'react';
//import { Link } from 'react-router-dom'; //add links for pages


function Nav(){
  return (
    <header style={headerStyle}>
      <h1>Reading List</h1>
    </header>
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
export default Nav;
