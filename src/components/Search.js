import React from 'react';
//import { Link } from 'react-router-dom'; //add links for pages


function Search(){
  return (
    <input type="text" placeholder="Search books.." style={searchStyle}/>
  )
}

const searchStyle = {
  width: '400px',
  float: 'right',
  padding: '6px',
  border: 'none',
  marginTop: '8px',
  marginRight: '16px',
  fontSize: '17px',
  borderRadius: '10px'
}

export default Search;
