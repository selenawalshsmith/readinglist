import React, {Component}  from 'react';
import UserHome from "./UserHome";
import BookGrid from "./grid/BookGrid";
import BookCard from "./grid/BookCard";

function ShowBooks(props){
  const isLoading = props.isLoading;
  if (!isLoading){
    return <BookGrid cols={3}>
            {
              props.myBooks.map((bookItem, i) => (
                  <BookCard title={bookItem.title} id={bookItem.id} author={bookItem.author} img={bookItem.img} description={bookItem.description} key={i}/>
            ))}
            </BookGrid>
  }
  return <h2>Loading books...</h2>
}
export default ShowBooks;
