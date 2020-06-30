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
  ///////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  ///////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  /*
  axios
    .post("/api/users/getBookList", {name: userName})
    .then(res => {
      console.log(res.data.success.booklist);
      //jsonList = res.data.success.booklist;
      this.setState({jsonBookList: res.data.success.booklist})
    }).catch(err => {console.log(err);});
    */
  //console.log(jsonList);
  //this.getBooks(jsonList);

  //books will be added as json strings
  //console.log(this.state.jsonBookList);

  /*
  getBookList(){
    const userName = this.getUserName(this.props.location.pathname);
    let jsonList = {};
    axios
      .post("/api/users/getBookList", {name: userName})
      .then(res => {
        console.log(res.data.success.booklist);
        //jsonList = res.data.success.booklist;
        this.setState({jsonBookList: res.data.success.booklist})
      }).catch(err => {console.log(err);});
    return jsonList;
 }
 */





 let book1 = {
   id: "We21AwAAQBAJ",
   title: "Principles and Practice Using C++",
   author: "Bjarne Stroustrup",
   description: "An Introduction to Programming by the Inventor of C++ Preparation for Programming in the Real World The book assumes that you aim eventually to write non-trivial programs, whether for work in software development or in some other technical field ...",
   img: "http://books.google.com/books/content?id=We21AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 };
 let book2 = {
   id: "yQRErgEACAAJ",
   title: "Grokking Algorithms",
   description: "Summary Grokking Algorithms is a fully illustrated, friendly guide that teaches you how to apply common algorithms to the practical problems you face every day as a programmer. You'll start with sorting and searching and, as you build up your ...",
   img: "http://books.google.com/books/content?id=We21AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 };
 let book3 = {
   id: "PXa2bby0oQ0C",
   title: "JavaScript: The Good Parts",
   description: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal ...",
   img: "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 };
 book1 = JSON.stringify(book1);
 book2 = JSON.stringify(book2);
 book3 = JSON.stringify(book3);







 ////////////////////////////
 ///////////////////////////


 <Route path="/" exact component={UserHome} user={this.user}/>
 <Route path="/explore" exact component={Explore} user={this.user}/>
 <Route path="/register" exact component={Register}/>
 <Route path="/login" exact component={Login}/>
 <Route path="/book" component={Book} user={this.user}/>





 display: inline-block;
 border: none;
 background: #C6E4EE;
 border-radius: 95px;
 color: #152238;
 padding: 7px 20px;
 cursor: pointer;





 // Check for token to keep user logged in
 const getUser = () => {
   if (localStorage.jwtToken) {
     // Set auth token header auth
     const token = localStorage.jwtToken;
     setAuthToken(token);
     // Decode token and get user info and exp
     const decoded = jwt_decode(token);
     // Set user and isAuthenticated
     //setUser(decoded);
     //console.log(decoded);
     //App.setState({user: decoded});
     //store.dispatch(setCurrentUser(decoded));
     // Check for expired token
     const currentTime = Date.now() / 1000; // to get in milliseconds
     if (decoded.exp < currentTime) {
       // Logout user
       //logoutUser();
       console.log("add logout action");

       // Redirect to login
       window.location.href = "./login";
     } else {
       console.log(decoded.email);
       return decoded.email;
     }
   }
 }
