import React,{Component} from 'react';
import LandingPage from "./pages/landingPage/landingPage"
import UserDashboard from "./pages/user-dashboard/user-dashboard"
import {connect} from 'react-redux'
import { Route,Redirect,Switch } from "react-router-dom"


class App extends Component {
  state ={
    isAuth:true
  }
  render(){
  return (
    <div>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      {this.props.isAuth ? <Route path="/user-dasboard" component={UserDashboard}/> : <Redirect from = "/user-dasboard" to ="/"/> }
      </Switch>
    </div>
  );
}}
const mapStateToProps = (state) => {
  return{
   isAuth:state.auth,
  }}

export default connect(mapStateToProps)(App)