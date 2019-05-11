import React, { Component } from "react";
import axios from "axios";
import Button from "../components/landingpage/button"
import Modal from "../components/modal"
import Footer from "../components/sub-components/footer"
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

    componentDidMount(){
      console.log("landing page did mount")
    }
    componentDidUpdate(){
      console.log("landing page did update")
    }
  modalHandler = (val) => {
    console.log(val)
      this.setState(prevState => ({
        modal: !prevState.modal,
        currentModal:val
    }))
    }

  onChange = (event) =>  {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmitRegister = (event) => {
    event.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    axios
      .post("https://comentoring.herokuapp.com/api/users/signup", newUser)
      .then(res => console.log(res.data))
      .catch(err => {
        console.log(err.response.data.errors) 
        return this.setState({ errors: err.response.data.errors })
      });
  }

  onSubmitLogin = (event) => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("https://comentoring.herokuapp.com/api/users/login", user)
      .then(res => console.log(res.data))
      .catch(err => {
        console.log(err.response.data.errors) 
        return this.setState({ errors: err.response.data.errors })
      })
  }
  render() {
    let modal;
    let submit;
    if(this.state.currentModal === "login"){submit = this.onSubmitLogin} 
    if(this.state.currentModal === "register"){submit = this.onSubmitRegister}
    if(this.state.modal === true) {
      modal =  <Modal click = {() => this.modalHandler("")} currentModal ={this.state.currentModal} submit ={submit}/>
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

export default landingPage;

