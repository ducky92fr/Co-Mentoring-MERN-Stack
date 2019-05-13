import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './navbar'
import userProfile from './nestedPage/userProfile/userProfile'
import userChat from './nestedPage/userChat'
import userSearch from './nestedPage/userSearch'
import userInfo from './nestedPage/userInfor'
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/authActions'
import './loggedPage.css'

class userLogin extends Component {
    state = {
      toggleNav: false
    };
    onSubmitLogout = (event) => {
    event.preventDefault();
    this.props.logoutUser()
  }

toggleNav = () => {
  this.setState(prevState => ({toggleNav: !prevState.toggleNav}))
}
componentDidMount(){
}
componentDidUpdate(){

  if(!localStorage.jwtToken){
      this.props.logoutUser()
  }
}
  render() {
    
    return (
      <React.Fragment>
      <NavBar click ={this.onSubmitLogout} toggleNav ={this.toggleNav} navToggle = {this.state.toggleNav ? "is-active" : ""}/>
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

