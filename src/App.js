import React from 'react';
import Nav from "./components/layout/Nav";
import BookGrid from "./components/grid/BookGrid"
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <BookGrid/>
    </div>
  );
}

export default App;
