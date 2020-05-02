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
  background: "#333",
  color: '#fff',
  textAlign: 'left',
  padding: '10px',
  fontSize: '25px'
}
const linkStyle = {
  color: '#fff',
  textDecoration:'none'
}
export default Nav;
