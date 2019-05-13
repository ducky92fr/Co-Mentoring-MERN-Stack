import React, { Component } from "react";
import {connect} from 'react-redux'


class userProfile extends Component {
    state = {
      firstName: "",
      lastName: "",
      skill1:"",
      companyCity:"",
      skill2:"",
      skill3:"",
      skill1level:"",
      skill2level:"",
      skill3level:"",
      available:"",
      avatar:"",
      errors: {},
  };
  static getDerivedStateFromProps(nextProps,prevState){
    if(JSON.stringify(nextProps.errors) === JSON.stringify(prevState.errors)){
      return null
  } else {
    return {errors:nextProps.errors}
  }}
  onChange = (event) =>  {
    this.setState({ [event.target.name]: event.target.value });
  }
  onSubmitRegister = (event) => {
    event.preventDefault();
  }
  render() {
    return (
    <div className="columns is-centered is-vertical-center is-mobile  ">
      <div className="column is-four-fifths-mobile is-half-desktop is-three-quarters-tablet">
      <h1 className ="has-text-centered is-size-4 has-text-weight-bold" >Edit Your Profile</h1>
      <form >

     </form>
  </div>
  </div>
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

}}

export default connect(mapStateToProps,mapDispatchToProps)(userProfile);

