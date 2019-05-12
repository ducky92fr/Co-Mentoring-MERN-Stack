import React,{Component} from 'react';
import LandingPage from "./pages/landingPage/landingPage"
import UserDashboard from "./pages/user-dashboard/user-dashboard"
import {connect} from 'react-redux'
import { Route,Redirect,Switch } from "react-router-dom"
import jwt_decode from 'jwt-decode';
import {setCurrentUser} from './actions/authActions'
import store from './store/store';

//check token
if(localStorage.jwtToken){
  //decode token and get user infor
  const decoded =jwt_decode(localStorage.jwtToken)
  //Set user and is authenticated
  store.dispatch(setCurrentUser(decoded))
}

class App extends Component {
  render(){
  const {isAuth} = this.props.isAuth
  console.log(isAuth)
  return (
    <div>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      {isAuth ? <Route path="/user-dashboard" component={UserDashboard}/> : <Redirect from = "/user-dashboard" to ="/"/> }
      </Switch>
    </div>
  );
}}

const mapStateToProps = (state) => {
  return{
   isAuth:state.auth,
  }}

export default connect(mapStateToProps)(App)