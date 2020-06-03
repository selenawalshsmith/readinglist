import displayErrors from "Register";
const registerUser = (userData, history) => {
     //console.log("welcome to registeruser");
     axios
     .post("/api/users/register", userData)
     .then((res) => {
       history.push("/login");
       //console.log(res);
     }).catch(err => {
       displayErrors(err)
       //console.dir(err.response.data);
       /*
       this.state.errors = err.response.data;
       const i =1;
       Object.entries(this.state.errors).map((obj,i)=> {
         console.log(obj[1]);
         this.setState((state) => {
           return{error: obj[1]}
         });
       })
     });
     */
};

export default registerUser;
