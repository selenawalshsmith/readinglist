import React, {Component}  from 'react';
//import UserHome from "./UserHome";

function ShowAddBooks(props){
  const addBook = props.addBook;
  if (addBook){
    return <button className="saveButton" onClick={props.saveBook} ><p>Add to list</p></button>
  }else{
    return <div></div>
  }
}
export default ShowAddBooks;
