import React, { Component } from "react";
import { Route, Switch,Redirect } from "react-router-dom";
import NavBar from './navbar'
import userProfile from "../user-dashboard/nestedPage/userProfile/userProfile"
import userChat from './nestedPage/userChat'
import userSearch from './nestedPage/userSearch/userSearch'
import userInfo from './nestedPage/userInfo/userInfor'
import {connect} from 'react-redux'
import Aux from '../../components/hoc/Aux'
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

componentDidUpdate(){
  if(!localStorage.jwtToken){
      this.props.logoutUser()
  }
}
  render() {
    let hasProfile = null
   if(this.props.isAuth.user.hasProfile || this.props.profileCreated) {
     hasProfile = (<Aux>
      <Route path="/user" exact component={userInfo} />
      <Route path="/user/user-chat" component={userChat} />
      <Route path ="/user/user-search" component ={userSearch}/>
    </Aux>)
   } else {
     hasProfile =(
       <Aux>
         <Redirect from = "/user" to ="/user/user-profile"/>
         <Redirect from = "/user/user-chat" to ="/user/user-profile"/>
         <Redirect from = "/user/user-search" to ="/user/user-profile"/>
       </Aux>
     )
   }
    return (
      <React.Fragment>
      <NavBar click ={this.onSubmitLogout} toggleNav ={this.toggleNav} navToggle = {this.state.toggleNav ? "is-active" : ""}/>
      <Switch>
      <Route path="/user/user-profile" component={userProfile} />
      {hasProfile}
      }
      </Switch>
    </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return{
   isAuth:state.auth,
   errors:state.errors,
   profileCreated : state.postCreatedProfile.profileCreated
  }}
  const mapDispatchToProps =  dispatch => {
    return{
    logoutUser :() => dispatch(logoutUser()),
  }}

export default connect(mapStateToProps,mapDispatchToProps)(userLogin);

