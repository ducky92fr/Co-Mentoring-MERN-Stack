import React, { Component } from "react";

import Button from "./button"
import Modal from "../../components/modal"
import Footer from "../../components/sub-components/footer"
import {connect} from 'react-redux'
import {registerUser, loginUser} from '../../actions/authActions'
import {resetError} from '../../actions/errorActions'
import "./landingPage.css"

class landingPage extends Component {
    state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      modal:false,
      currentModal:""
    };

    static getDerivedStateFromProps(nextProps,prevState){
      if(JSON.stringify(nextProps.errors) === JSON.stringify(prevState.errors)){
        return null
    } else {
      return {errors:nextProps.errors}
    }
  }
  componentDidMount(){
    if(this.props.isAuth.isAuth){
      this.props.history.push('/user-dashboard')
    }
  }

  modalHandler = (val) => {
      this.setState(prevState => ({
        firstName:"",
        lastName:"",
        password:"",
        password2:"",
        modal: !prevState.modal,
        currentModal:val
    }))
    this.props.resetError()
    }

  onChange = (event) =>  {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmitRegister = (event) => {
    event.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(data)
  }

  onSubmitLogin = (event) => {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(data,this.props.history)

  
  }
  render() {
    let modal;
    let submit;
    if(this.state.currentModal === "login"){submit = this.onSubmitLogin} 
    if(this.state.currentModal === "register"){submit = this.onSubmitRegister}
    if(this.state.modal === true) {
      modal =  <Modal click = {() => this.modalHandler("")} currentModal ={this.state.currentModal}  submit ={submit} errors ={this.state.errors} change={this.onChange}/>
    }
    return (
      <React.Fragment>
      <div className = "top-bar"/>
      <div className ="landing">
      <div className ="landing-body">
      <h1 className="title is-1 has-text-white">Co-Mentoring</h1>
      <p className="subtitle is-5 has-text-white">Get in touch with your colleagues to get a mentor or to be someone's mentor</p>
      <Button click ={this.modalHandler}/>
      </div>
      {modal}
      </div>
     <Footer/>
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
  registerUser : (data) => dispatch(registerUser(data)),
  loginUser :(data,history) => dispatch(loginUser(data,history)),
  resetError : () => dispatch(resetError())
}}

export default connect(mapStateToProps,mapDispatchToProps)(landingPage);

