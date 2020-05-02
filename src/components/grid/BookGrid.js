import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class BookGrid extends Component {
  render() {
      return (
        <Grid fluid>
          <Row>
            <Col xs={6} md={3}>
              Hello, world!
            </Col>
            <Col xs={6} md={3}>
              Hello, world!
            </Col>
            <Col xs={6} md={3}>
              Hello, world!
            </Col>
          </Row>
        </Grid>
      )
  }
}

export default BookGrid;
