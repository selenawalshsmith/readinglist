return ()=> {
  for(i=0; i <= this.props.myBooks.length; i++){
    for(let r=0; r <= 3; r++){
      <Row>

      </Row>
    }
  }
}




import React, {Component} from 'react';
//import BookCard from "./BookCard"
import { Grid, Row, Col } from 'react-flexbox-grid';
import {chunk} from 'lodash';
//import '../../bootstrap/css/bootstrap.min.css'
import './card.css';

//this.props.myBooks = the array of myBooks in the App.js State
type flexColumns = {
  cols: 1 | 2 | 3 | 4 | 6 | 12
}
/*class BookGrid extends Component {
  render() */
  const GridGenerator: React.FC<flexColumns> = ({ cols, children}) =>
  {
    const numOfColumns = 3;
    const rows = chunk(this.props.myBooks, numOfColumns);
    return (
      <Grid fluid style={gridStyle}>
      {rows.map((numOfColumns) =>(
        <Row>
          {cols.map((col) => (
            <Col lg={4} md={3}>
              {<BookCard/>}
            </Col>
          ))}
        </Row>
      ))}
    )

    //const { id, title, author, img} = this.props.myBooks;
    //return this.props.myBooks.map((book) => do something with book)
    //return ()=> {for(i=0; i <= this.props.myBooks.length; i++){}}
    /*
      return (
        <Grid fluid style={gridStyle} >
          <Row>
            <Col lg={4} md={3}>
              <div className="card">
              <p>hello</p>
              </div>
            </Col>
            <Col lg={4} md={3}>
              <div className="card">
              <p>hello</p>
              </div>
            </Col>
            <Col lg={4} md={3}>
              <div className="card">
                <p>hello</p>
              </div>
            </Col>
          </Row>
        </Grid>
      )
    */
  }
}




const gridStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100%',
  minWidth: '100%',
  padding: '40px'
}




export default BookGrid;
