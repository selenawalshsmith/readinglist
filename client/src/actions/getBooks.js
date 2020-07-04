import axios from "axios";

const getBooks = (email) => {
  axios.post("/api/users/getBookList", email).then(res=> {
    console.log(res.data.bookList);
  }).catch(err => {console.log(err);});
}
export default getBooks;
