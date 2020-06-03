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



key={this.state.myBooks.id}




//{this.props.myBooks.items.map((book, i)=> (
  <BookCard myBooks={this.state.myBooks}/>
//))}





import React, {Component} from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';
import {size} from 'lodash';
import './card.css';

class Books extends Component {
  //console.log(this.props.myBooks);
  render() {
    //return this.props.myBooks.map((book)=>(
      //<BookCard myBooks={book}/>
    //));
    //console.log(this.props.myBooks.items.keys(this.props.myBooks.items).length);
    var x = numKeys(this.props.myBooks.items);
    //var y = this.props.myBooks.items;
  //console.log(x);
    //var bookList = this.props.myBooks.items;
    //console.log( bookList["0"]);
    //for (var prop in this.props.myBooks.items){
  //    console.log(this.props.myBooks.items.prop);
  //  }

    return()
    //  return this.props.myBooks.items.entries((book)=>(
    //    <BookCard myBooks={book}/>
    //  ));


    //console.log('x');
  }
}
/*
Books.propTypes = {
  myBooks: PropTypes.array.isRequired
}
*/
function numKeys(obj){
  var count=0;
  for (var prop in obj){
    count++;
  }
  return count;
}

export default Books;



<BookGrid cols={3} myBooks={this.state.myBooks} key={this.state.myBooks.id}>

</BookGrid>





const bookArray=[];
for (var key in this.state.myBooks){
  if (this.state.myBooks.hasOwnProperty(key)){
    bookArray.push(this.state.myBooks[key]);
  }
}
for(var i =0; i < bookArray.length; i++){
  console.log(bookArray[i]);
}
console.log("items:");

console.log(bookArray[2]); //it's an array but it wont recognize map or other things


<Grid>
  <Row>
    <Col>
       <h1>hello</h1>
    </Col>
    <Col>
      <h1>hello</h1>
    </Col>
  </Row>
  <Row>
    <Col>
      <h1>hello</h1>
    </Col>
    <Col>
      <h1>hello</h1>
    </Col>
  </Row>
  <Row>
    <Col>
      <h1>hello</h1>
    </Col>
    <Col>
      <h1>hello</h1>
    </Col>
  </Row>
</Grid>








componentDidMount(){
  var key='AIzaSyAUiO51_Ibao2w1ThiUOG1RSufiHmmQ_jE';
  axios.get('https://www.googleapis.com/books/v1/users/105309221066047026022/bookshelves/1001/volumes')
    .then((response) => {
      var bookList = JSON.stringify(response.data); //turns json to a string
      bookList = JSON.parse(bookList); //turns json string into a js object?
      this.setState({myBooks: bookList});
    })
    .catch(function (error){
      console.log(error);
    })
}
onChange={this.props.searchQuery = this.searchQuery}
onKeyDown={(e)=> this.props.performSearch(e, this.searchQuery)}

<Link to={`/Book/${this.props.id}`}>

  <Route path='/Book/${this.props.id}' component={Book}/>