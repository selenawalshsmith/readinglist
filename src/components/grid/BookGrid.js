import React, {Component} from 'react';
//import BookCard from "./BookCard"
import { Grid, Row, Col } from 'react-flexbox-grid';
//import '../../bootstrap/css/bootstrap.min.css'
import './card.css';

//this.props.myBooks = the array of myBooks in the App.js State

class BookGrid extends Component {

  render() {
    //const { id, title, author, img} = this.props.myBooks;
    //return this.props.myBooks.map((book) => do something with book)
    //return ()=> {for(i=0; i <= this.props.myBooks.length; i++){}}
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
