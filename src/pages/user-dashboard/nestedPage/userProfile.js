import React, { Component } from "react";
import {connect} from 'react-redux'


class userProfile extends Component {
    state = {
      firstName: "",
      lastName: "",
      skill1:"",
      skill2:"",
      skill3:"",
      skill1level:"",
      skill2level:"",
      available:"",
      errors: {},
  };

  render() {
    return (
      <React.Fragment>
      "here page edit profile"
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

