import React, { Component } from "react";
import {connect} from 'react-redux'
import Form from './formProfile.js'


class userProfile extends Component {
    state = {
      firstName: "",
      lastName: "",
      companyCity:"",
      skill1:"",
      skill2:"",
      skill1level:"",
      skill2level:"",
      available:"",
      avatar:"",
      errors: {},
      fileName:""
  };
  static getDerivedStateFromProps(nextProps,prevState){
    if(JSON.stringify(nextProps.errors) === JSON.stringify(prevState.errors)){
      return null
  } else {
    return {errors:nextProps.errors}
  }}
  componentDidUpdate(){
  }
  onChange = (e) =>  {
    console.log(e.target.value)
    switch (e.target.name) {
      case 'selectedFile':
      	if(e.target.files.length > 0) {
          const splitName = e.target.files[0].name.split('.')
          let fileName =splitName[0];
          const extension =splitName[1];
          if(fileName.length > 10) {fileName = fileName.substring(0,10)}
          const result = fileName +'.'+ extension
        	this.setState({ fileName: result });
        }
      break;
      default:
        this.setState({ [e.target.name]: e.target.value });
     }
  }
  onSubmitProfile = (event) => {
    event.preventDefault();

  }
  render() {
    console.log(this.state.skill1)
    return (
    <React.Fragment>
    <div className="columns is-centered is-vertical-center is-mobile  ">
      <div className="column is-four-fifths-mobile is-half-desktop is-three-quarters-tablet">
      <hr/>
      <h1 className ="has-text-centered is-size-4 has-text-weight-bold" >Edit Your Profile</h1>
      <Form change = {this.onChange} 
            submit = {this.onSubmitProfile} 
            fileName ={this.state.fileName}
            errors ={this.state.errors}/>
      </div>
    </div>
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

}}

export default connect(mapStateToProps,mapDispatchToProps)(userProfile);

