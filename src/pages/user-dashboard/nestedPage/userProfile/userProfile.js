import React, { Component } from "react";
import {connect} from 'react-redux'
import {submitProfile} from '../../../../actions/profileActions'
import {removeMessageCreated,fetchCurrentUser} from '../../../../actions/profileActions'
import InputField from '../../../../components/inputField'
import InputItems from '../../../../components/sub-components/inputItems'
import Select from '../../../../components/sub-components/selectItems'
import Upload from './uploadFile'
import Button from '../../../../components/sub-components/button'
import {resetError} from '../../../../actions/errorActions'


class userProfile extends Component {
    state = {
      firstName: "",
      lastName: "",
      companyCity:"",
      skill1:"",
      skill2:"",
      skill1Level:"",
      skill2Level:"",
      available:"",
      errors: {},
      fileName:""
  };
  static getDerivedStateFromProps(nextProps,prevState){
    if(JSON.stringify(nextProps.errors) === JSON.stringify(prevState.errors)){
          return null
      } else {
        return {errors:nextProps.errors}
      }
    }

   componentDidMount(){
     console.log("user profile did mount")
     const result = {...this.props.profileDetails.profile}
     console.log(result)
     this.setState({
       firstName:result.firstName,
       lastName:result.lastName,
       companyCity:result.companyCity,
     })

  }
  componentWillUnmount(){
    this.props.resetError()
    this.props.resetMessage()
    this.props.fetchCurrentUser()
  }
  componentDidUpdate(){
    console.log("here inside userProfile updated")
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
    // const {firstName,lastName,companyCity} = this.props.profileDetails.profile
    this.props.resetError()
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      companyCity: this.state.companyCity,
      skill1:this.state.skill1,
      skill2:this.state.skill2,
      skill1Level:this.state.skill1Level,
      skill2Level:this.state.skill2Level
    };
    this.props.submitProfile(data)
    
  }

  render() {
    const {errors,fileName} = this.state
    return (
      <div className="columns is-centered is-vertical-center is-mobile ">
      <div className="column is-four-fifths-mobile is-half-desktop is-three-quarters-tablet">
      <hr/>
      <h1 className ="has-text-centered is-size-4 has-text-weight-bold" >Edit Your Profile</h1>
      {this.props.message? <p className="help is-danger">{this.props.message}</p> :null}
      <form onSubmit={this.onSubmitProfile}>
      <InputField err ={errors.firstName} icon = "has-icons-left" label ="Your first name">
        <InputItems 
        type="text" 
        name ="firstName" 
        placeholder ="Please enter your first name" 
        fontAwsome =" fas fa-user"
        value={this.state.firstName || ""}
        change ={this.onChange} />
    </InputField>

    <InputField err ={errors.lastName} icon = "has-icons-left" label ="Your last name">
    <InputItems 
        type="text" 
        name ="lastName" 
        placeholder ="Please enter your last name" 
        fontAwsome =" fas fa-user" 
        value={this.state.lastName || "" }
        change ={this.onChange} />
    </InputField>
    <InputField err ={errors.companyCity} icon = "has-icons-left" label ="Your living city">
    <InputItems 
        type="text" 
        name ="companyCity" 
        placeholder ="Please enter your living city" 
        fontAwsome ="far fa-building"
        value={this.state.companyCity || ""}
        change ={this.onChange}/>
    </InputField>
    <InputField err ={errors.skill1} err1 ={errors.skillDiff} label ="Your first skill">
        <Select defaultVal ="DEFAULT" name = "skill1" change ={this.onChange}>
            <option value ="DEFAULT" disabled>Select an option</option>
            <option value ="NodeJs" >NodeJs</option>
            <option value ="Javascript" >Javascript</option>
            <option value ="Express" >Express</option>
            <option value ="Java" >Java</option>
        </Select>
        <Select defaultVal ="DEFAULT" name ="skill1Level" change ={this.onChange}>
            <option value ="DEFAULT" disabled>Your Level</option>
            <option value ="1" >Beginner</option>
            <option value ="2" >Intermediate</option>
            <option value ="3" >Advanced</option>
        </Select>
    </InputField>

    <InputField err ={errors.skill2} err1 ={errors.skillDiff} label ="Your second skill">
    <Select defaultVal ="DEFAULT" name ="skill2" change ={this.onChange}>
        <option value ="DEFAULT" disabled>Select an option</option>
        <option value ="NodeJs" >NodeJs</option>
        <option value ="Javascript" >Javascript</option>
            <option value ="Express" >Express</option>
            <option value ="Java" >Java</option>
    </Select>
    <Select defaultVal ="DEFAULT" name ="skill2Level" change ={this.onChange}>
        <option value ="DEFAULT" disabled>Your Level</option>
        <option value ="1" >Beginner</option>
        <option value ="2" >Intermediate</option>
        <option value ="3" >Advanced</option>
      </Select>
    </InputField>
      <InputField label ="Your status">
      <Select defaultVal ="DEFAULT" name="available" change ={this.onChange}>
        <option value ="DEFAULT" disabled>Select an option</option>
        <option value ="true" >Available</option>
        <option value ="false" >Not availalbe</option>
      </Select>
      </InputField>
      <Upload selected={fileName ? "Selected file" :"Please choose a file"} fileName ={fileName ? "You have selected " + fileName :null} change ={this.onChange}/>
      <hr/>
      <Button  btnName ="Submit your profile" styles ="button is-link" type ="submit" />
    </form>
    </div>
    </div>
    )
      
  }}


const mapStateToProps = (state) => {
return{
 isAuth:state.auth,
 errors:state.errors,
 profileCreated : state.postCreatedProfile.profileCreated,
 message:state.postCreatedProfile.message,
 profileDetails:state.postCreatedProfile.profileDetails
}}
const mapDispatchToProps =  dispatch => {
  return{
    submitProfile : (data) => dispatch(submitProfile(data)),
    resetError : () => dispatch(resetError()),
    resetMessage : () => dispatch(removeMessageCreated()),
    fetchCurrentUser:() => dispatch(fetchCurrentUser())
}}
export default connect(mapStateToProps,mapDispatchToProps)(userProfile)
