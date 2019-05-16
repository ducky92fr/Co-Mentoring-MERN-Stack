import React, { Component } from "react";
import Container from "./container";
import CardConnect from "./cardConnect"
import "./userInfo.css";
import {connect} from 'react-redux'
import {submitProfile} from '../../../../actions/profileActions'
import {fetchCurrentUser} from '../../../../actions/profileActions'
import Card from './card'
class userInfo extends Component {
state ={
  requestSent:[],
  requestReceived:[],
  connection:[]
}

static getDerivedStateFromProps(nextProps,prevState){
  if(Object.keys(nextProps.profileDetails).length > 0){
  if(prevState.connection.length !== nextProps.profileDetails.profile.connection.length ||
    prevState.requestReceived.length !== nextProps.profileDetails.profile.requestReceived.length ||
    prevState.requestSent.requestSent !== nextProps.profileDetails.profile.requestSent.length
    ) {
      return {
        requestReceived:nextProps.profileDetails.profile.requestReceived,
        connection : nextProps.profileDetails.profile.connection,
        requestSent: nextProps.profileDetails.profile.requestSent
      }
    }else {return null}
}else {return null}
}

  componentDidMount(){
    this.props.fetchCurrentUser()
  }
  render() {
    console.log(this.state)
    const user = {...this.props.profileDetails}
    let skill =null
    if(Object.keys(user).length > 0){
      skill = user.profile.competencies.map(el => Object.keys(el)[0])
    }
    
    return (
      <React.Fragment>
        <div className="columns is-centered is-vertical-center is-mobile ">
            <div className="column is-four-fifths-mobile is-half-desktop is-three-quarters-tablet">
            <hr/>
            <h1 className ="has-text-centered is-size-4 has-text-weight-bold" >User Dashboard</h1>
            </div>
        </div>


        <div className=" columns is-mobile is-multiline is-centered">
        <div className="column is-two-fifths-desktop is-four-fifths-mobile is-two-thirds-tablet ">
        <Container>
        <figure className="image is-128x128 btn_group">
            <img alt ="avatar "src={user.profile ? user.profile.avatar :null} />
          </figure>
          <div>First name : {user.profile ? user.profile.firstName : null }</div>
          <div>Last name : {user.profile ? user.profile.lastName : null}</div>
          <div>Living City : {user.profile ? user.profile.companyCity : null}</div>
          <div>
            Skills: {skill ? skill[0] + " and " + skill[1] : null } 
          </div>
        </Container>
        <Container>
        <CardConnect/>
        </Container>
         
</div>
    <div className="column is-two-fifths-desktop is-four-fifths-mobile is-two-thirds-tablet">
        <Container>
          <Card type ="To" sent ="yes"/>
        </Container>
        <Container>
          <Card type ="From" message ="Hello, i would like to connect with you"/>
        </Container>
        
</div>
</div> 

    
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return{
   isAuth:state.auth,
   errors:state.errors,
   profileCreated : state.postCreatedProfile.profileCreated,
   profileDetails : state.postCreatedProfile.profileDetails,
  }}
  const mapDispatchToProps =  dispatch => {
    return{
      submitProfile : (data) => dispatch(submitProfile(data)),
      fetchCurrentUser:() => dispatch(fetchCurrentUser())
  }}

export default connect(mapStateToProps,mapDispatchToProps)(userInfo);