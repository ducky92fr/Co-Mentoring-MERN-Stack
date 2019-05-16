import React,{Component} from 'react';
import LandingPage from "./pages/landingPage/landingPage"
import UserLogin from "./pages/user-dashboard/loggedPage"
import {connect} from 'react-redux'
import { Route,Redirect,Switch } from "react-router-dom"
import jwt_decode from 'jwt-decode';
import {setCurrentUser} from './actions/authActions'
import {hasProfile,fetchCurrentUser} from './actions/profileActions'
import store from './store/store';
import setAuthToken from './utils/setHeaders'
import PageNotFound from './pages/404Page/404Page'
// import userProfile from './pages/user-dashboard/userprofile/userProfile'

// Persist state
//check token
if(localStorage.jwtToken){
  //decode token and get user infor
  const decoded =jwt_decode(localStorage.jwtToken)
  //Set user and is authenticated
  setAuthToken(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))

  if(localStorage.isHasProfile){
    store.dispatch(hasProfile(true))
  }
}

class App extends Component {
  componentDidMount(){
    console.log("App did mount")
    store.dispatch(fetchCurrentUser())
  }
  componentDidUpdate(){
    console.log("App did Update")
  }
  render(){
  const {isAuth} = this.props.isAuth
  return (
    <div>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      {isAuth ? <Route path="/user" component={UserLogin}/> : <Redirect from = "/user" to ="/"/> }
      <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}}

const mapStateToProps = (state) => {
  return{
   isAuth:state.auth,
  }}

export default connect(mapStateToProps)(App)