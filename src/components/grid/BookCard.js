import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import './card.css';


class Bookcard extends Component {
  render() {
      //const {id, title, author, img} = this.props.myBooks;
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
                    <h2 className="card-title">{this.props.title}</h2>
                    <p>By {this.props.author}</p>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
          <div className="saveButtonContainer">
            <button className="saveButton"><p>Add to list</p></button>
            <Link to={`/book/${this.props.id}`}>
              <button className="saveButton"><p>Description</p></button>
            </Link>
          </div>
        </div>
      )
  }
}

export default Bookcard;
