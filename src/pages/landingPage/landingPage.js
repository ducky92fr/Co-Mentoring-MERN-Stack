import React, { Component } from "react";
import Button from "./button"
import ModalGroup from "./modal"
import Footer from "../../components/sub-components/footer"
import {connect} from 'react-redux'
import {registerUser, loginUser} from '../../actions/authActions'
import {resetCreated} from '../../actions/postSignUp'
import {resetError} from '../../actions/errorActions'
import "./landingPage.css"

class landingPage extends Component {
    state = {
      email: "",
      password: "",
      password2: "",
      errors: {},
      modal:false,
      currentModal:""
    };

    static getDerivedStateFromProps(nextProps,prevState){
      if(nextProps.created === true){
        if(prevState.modal === true){
        return {
          currentModal : "login"}}
        else{
          return {
            currentModal :"login", modal:true}}
        } else{
        if(JSON.stringify(nextProps.errors) === JSON.stringify(prevState.errors)){
            return null
      } else {
        return {errors:nextProps.errors}
      }
    }
  }
  componentDidMount(){
    if(this.props.isAuth.isAuth){
      this.props.history.push('/user')
    }
  }

  modalHandler = (val) => {
      this.setState(prevState => ({
        email:"",
        password:"",
        password2:"",
        modal: !prevState.modal,
        currentModal:val,
    }))
    this.props.resetError()
    this.props.resetCreated()
  
    }

  onChange = (event) =>  {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmitRegister = (event) => {
    event.preventDefault();
    const data = {
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
      modal =  <ModalGroup click = {() => this.modalHandler("")} currentModal ={this.state.currentModal}  submit ={submit} errors ={this.state.errors} change={this.onChange} accountCreated={this.props.created}/>
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
     <Footer>Copyright 2019 Duc Nguyen / Christofer Perez Bustamante</Footer>
     </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
return{
 isAuth:state.auth,
 errors:state.errors,
 created:state.postSignUp.created
}}
const mapDispatchToProps =  dispatch => {
  return{
  registerUser : (data) => dispatch(registerUser(data)),
  loginUser :(data,history) => dispatch(loginUser(data,history)),
  resetError : () => dispatch(resetError()),
  resetCreated : () => dispatch(resetCreated())
}}

export default connect(mapStateToProps,mapDispatchToProps)(landingPage);

