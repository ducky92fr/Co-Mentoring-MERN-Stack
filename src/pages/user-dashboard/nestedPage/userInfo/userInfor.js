import React, { Component } from "react";
import Container from "./container";
import ButtonGroup from "./button_group";
import "./userInfo.css";
import {connect} from 'react-redux'
import {submitProfile} from '../../../../actions/profileActions'
import {removeMessageCreated,fetchCurrentUser} from '../../../../actions/profileActions'
class userInfo extends Component {
  state = {
    firstName :"",
    lastName :"",
    avatar:"",
    skill1: "",
    skill2:"",
    companyCity:""
  }
  // static getDerivedStateFromProps(nextProps,prevState){
  //  console.log(nextProps)
  //   }
  componentDidMount(){
    this.props.fetchCurrentUser()
  }
  render() {
    const user = {...this.props.userDetails}
    let skill =null
    console.log(user)
    if(Object.keys(user).length > 0){
      skill = user.profile.competencies.map(el => Object.keys(el)[0])
      console.log(skill)
    }
    
    return (
      <React.Fragment>
        <div className="hero-body ">
          <div className="container has-text-centered  ">
            <h1 className="title">Co-Mentoring</h1>
            <h2 className="subtitle">Dashboard</h2>
          </div>
        </div>

        <div className=" columns is-mobile is-multiline is-centered">
          <div className="column is-one-third-desktop is-four-fifths-mobile ">
            <div className="user_dashboard">
              <div className="columns is-desktop">
                <div className="column">
                  <div className ="content_column">
                    <figure className="image is-128x128 btn_group">
                      <img alt ="avatar "src={user.profile ? user.profile.avatar : null } />
                    </figure>
                    <div className="container_content btn_group ">
                      <div className ="medal_container">
                        <div>Silver Medal</div>
                        <i className="fas fa-medal">10</i>
                      </div>
                      <div className ="medal_container">
                      <div>Gold Medal</div>
                       
                        <i className="fas fa-award">15</i>
                      </div>
                    </div>
                    <div>First name : {user.profile ? user.profile.firstName : null }</div>
                    <div>Last name : {user.profile ? user.profile.lastName : null}</div>
                    <div>Living City : {user.profile ? user.profile.companyCity : null}</div>
                    <div>
                      Skills: {skill ? skill[0] + " and " + skill[1] : null } 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-two-fifths-desktop is-four-fifths-mobile is-two-thirds-tablet">
            <div className="green ">
              <div className="columns is-desktop">
                <div className="column">
                  <Container
                    name="Duc NGUYEN"
                    date="16/02/2002"
                    message="Hello blah blah">
                    <ButtonGroup /> 
                  </Container>

                  <div className="green ">
                    <div className="columns is-desktop">
                      <div className="column">
                        <Container
                          name="Duc NGUYEN"
                          date="16/02/2002"
                          message="Hello blah blah"
                        >
                          <div>
                            name="Duc NGUYEN" date="16/02/2002" message="Hello
                            blah blah"
                          </div>
                          <div>
                            name="Duc NGUYEN" date="16/02/2002" message="Hello
                            blah blah"
                          </div>
                          <div>
                            name="Duc NGUYEN" date="16/02/2002" message="Hello
                            blah blah"
                          </div>
                        </Container>

                        <div className="green ">
                          <div className="columns is-desktop">
                            <div className="column">
                              <Container
                                name="Duc NGUYEN"
                                date="16/02/2002"
                                message="Hello blah blah"
                              >
                                <div>
                                  name="Duc NGUYEN" date="16/02/2002"
                                  message="Hello blah blah"
                                </div>
                                <div>
                                  name="Duc NGUYEN" date="16/02/2002"
                                  message="Hello blah blah"
                                </div>
                                <div>
                                  name="Duc NGUYEN" date="16/02/2002"
                                  message="Hello blah blah"
                                </div>
                                <div>
                                  name="Duc NGUYEN" date="16/02/2002"
                                  message="Hello blah blah"
                                </div>
                              </Container>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
   userDetails : state.postCreatedProfile.profileDetails
  }}
  const mapDispatchToProps =  dispatch => {
    return{
      submitProfile : (data) => dispatch(submitProfile(data)),
      fetchCurrentUser:() => dispatch(fetchCurrentUser())
  }}

export default connect(mapStateToProps,mapDispatchToProps)(userInfo);