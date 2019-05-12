import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './navbar'
import userProfile from './nestedPage/userProfile'
import userChat from './nestedPage/userChat'
import userSearch from './nestedPage/userSearch'
import userInfo from './nestedPage/userInfor'
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/authActions'

class userLogin extends Component {
    state = {
    };

    onSubmitLogout = (event) => {
    event.preventDefault();
    this.props.logoutUser()
  }



componentDidMount(){
  console.log("here")
}
componentDidUpdate(){
  console.log("here")
  if(!localStorage.jwtToken){
      this.props.logoutUser()
  }
}
  render() {
    
    return (
      <React.Fragment>
      
      <NavBar click ={this.onSubmitLogout}/>
      <Switch>
      <Route path="/user" exact component={userInfo} />
      <Route path="/user/user-profile" component={userProfile} />
      <Route path="/user/user-chat" component={userChat} />
      <Route path ="/user/user-search" component ={userSearch}/>
      </Switch>
    </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return{
   isAuth:state.auth,
   errors:state.errors
  }}
  const mapDispatchToProps =  dispatch => {
    return{
    logoutUser :() => dispatch(logoutUser()),
  }}

export default connect(mapStateToProps,mapDispatchToProps)(userLogin);

