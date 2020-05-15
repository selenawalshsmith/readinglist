import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './card.css';


class Bookcard extends Component {
  render() {
    /*
      return (
        <div className="card">
          <h1>{this.props.myBooks.title}</h1>
        </div>

      )

    return this.props.myBooks.map((book) => (
      <div className="card">
        <h1>{book.title}</h1>
      </div>
        ))
      */
      //const {id, title, author, img} = this.props.myBooks;
      //const title = this.props.myBooks
      //document.getElementById("x").src = img;
      //var book_image = img;
      //const {id, title} = this.props.bookItem;
      return(
        <div className="card">
          <div className="container">
            <Grid>
              <Row>
                <Col>
                  <img src={this.props.img}/>
                </Col>
                <Col>
                  <div className="title-author-div">
                    <h1 className="card-title">{this.props.title}</h1>
                    <p>By {this.props.author}</p>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
          <div className="description">
            <p>{this.props.description}</p>
          </div>
        </div>
      )
  }
}

export default Bookcard;
