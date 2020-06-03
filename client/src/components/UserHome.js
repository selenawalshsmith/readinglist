import React, {Component}  from 'react';

class UserHome extends Component{
  constructor(props) {
    super(props);
  }
  getUserName(pathname){
    var path_arr = pathname.split("/");
    return path_arr[2];
  }
  render (){
    const myName = this.getUserName(this.props.location.pathname);
    return (
      <div>Hello {myName}</div>
    )
  }
};
export default UserHome;
