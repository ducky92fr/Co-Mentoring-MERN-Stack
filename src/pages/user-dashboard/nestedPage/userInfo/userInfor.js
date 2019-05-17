import React, { Component } from "react";
import Container from "./container";
import CardConnect from "./cardConnect"
import "./userInfo.css";
import {connect} from 'react-redux'
import {submitProfile} from '../../../../actions/profileActions'
import {fetchCurrentUser} from '../../../../actions/profileActions'
import Card from './card'
import Tag from'./head-tag'
class userInfo extends Component {
state ={
  requestSent:[],
  requestReceived:[],
  connection:[] 
}

static getDerivedStateFromProps(nextProps,prevState){
  if(!nextProps.profileDetails.message){
  const user = {...nextProps.profileDetails.profile}
  if(Object.keys(nextProps.profileDetails).length >0){
    console.log("here")
  if(prevState.connection.length !== user.connection.length ||
    prevState.requestReceived.length !== user.requestReceived.length ||
    prevState.requestSent.requestSent !== user.requestSent.length
    ) {
      return {
        requestReceived:nextProps.profileDetails.profile.requestReceived,
        connection : nextProps.profileDetails.profile.connection,
        requestSent: nextProps.profileDetails.profile.requestSent
      }
    }else {return null}
}else {return null}
}else {return null}
}


  render() {
    console.log(this.state)
    const user = {...this.props.profileDetails}
    let skill =null
    console.log(user)
    if(Object.keys(user).length > 0){
      skill = user.profile.competencies.map(el => Object.keys(el)[0])
    }
    let sentField = this.state.requestSent.map(el => {
    return <Card
    key={el.userID} 
    userID={el.userID}
    type ="To: " 
    sent="yes" 
    fullName={el.fullName}
    date={el.date.slice(0,10)}
    message ={el.message} />
    }
    )
    let receivedField = this.state.requestReceived.map(el => {
      return <Card
      key={el.userID}
      type="From: "
      userID={el.userID}
      fullName={el.fullName}
      date={el.date.slice(0,10)}
      />
    })
    
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
        <Tag content ="User infos"/>
          <hr/>
        <figure className="image is-128x128 btn_group">
            <img alt ="avatar "src={user.profile ? user.profile.avatar :null} />
          </figure>
          <div className ="card_user">
      <div className ="card_infor">
      <div className ="has-text-weight-bold">Last name : {user.profile ? user.profile.firstName : null}</div>
      <div className ="has-text-weight-bold">First name : {user.profile ? user.profile.lastName : null}</div>
      <div className ="has-text-weight-bold">Living city: {user.profile ? user.profile.companyCity : null}</div>
      <div className ="has-text-weight-bold">Skills: {skill ? skill[0] + " and " + skill[1] : null }</div>
      </div>
    </div>
        </Container>
        <Container>
        <Tag content ="Your connection"/>
        <CardConnect/>
        </Container>
         
</div>
    <div className="column is-two-fifths-desktop is-four-fifths-mobile is-two-thirds-tablet">
        <Container>
        <Tag content ="Requests sent"/>
          {sentField}
        </Container>
        <Container>
        <Tag content ="Requests received"/>
          {receivedField}
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