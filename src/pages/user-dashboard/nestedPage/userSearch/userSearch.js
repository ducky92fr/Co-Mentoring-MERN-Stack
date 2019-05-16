import React,{Component} from "react";
import './userSearch.css'
import Card from './cardInfo'
import axios from "axios";

class userSearch extends Component { 
  state = {
    searchInput :"",
    result:[],
    message:""
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    const query = this.capitalizeFirstLetter(this.state.searchInput)
    axios
    .get(`api/search/skill?q=${query}`)
    .then(res => {
      console.log(res)
    return this.setState({
      result :[...res.data]
    })
  }
    )
    .catch(err => console.log(err))
  }
capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
connectHandler = e => {
  axios
  .post(`/api/connect/send?user_id=${e.target.value}`)
  .then(res => this.setState({message:"Request Sent"}))
  .catch(err => console.log(err))
}

  render(){
    console.log(this.state.result)
    let listUser = this.state.result.map(user => {
      const city = user.profileDetails.companyCity
      const key = user.userArray.profileID
      const keyObject =user.profileDetails.competencies.map(el =>  Object.keys(el)[0])
      const userID = user.userDetails._id
      const avatar = user.profileDetails.avatar
      const fullName = user.profileDetails.firstName + " " + user.profileDetails.lastName
      const skill1 = keyObject[0]
      const skill2 = keyObject[1]
      return <Card key={key} userID={userID} avatar = {avatar} click ={this.connectHandler} fullName = {fullName} city ={city} skill1 ={skill1} skill2 ={skill2}/>
    })

    return (
      <React.Fragment>
      <div className="columns is-centered is-mobile" id="search-bar">
      <div className="column is-three-quarters-mobile is-half-desktop is-three-quarters-tablet">
      <hr/>
      <form onSubmit = {this.onSubmitHandler}>
      <div className ="group-items">
      <input type="text" name ="searchInput" className="input is-info is-medium" placeholder="Search your mentor" onChange ={this.onChangeHandler}/>
      <button  className="button is-medium" type = "submit">Search</button>
      </div>
      </form>
       <hr/>
       {this.state.message ? <div className = "has-text-centered has-text-danger">{this.state.message}</div> : null}
      </div>
      </div>
    
    <div className="columns is-centered is-mobile" id="search-bar">
      <div className="column is-full-mobile is-half-desktop is-three-quarters-tablet">
      {listUser}
      </div>


      </div>
  </React.Fragment>
    )
  }
}
export default userSearch
