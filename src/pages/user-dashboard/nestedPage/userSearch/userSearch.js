import React,{Component} from "react";
import './userSearch.css'
import Card from './cardInfo'

class userSearch extends Component { 
  state = {
    searchInput :""
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmitHandler = (event) => {
    event.preventDefault()
    
  }
  render(){
    console.log(this.state.searchInput)
    return (
      <React.Fragment>
      <div className="columns is-centered is-mobile" id="search-bar">
      <div className="column is-three-quarters-mobile is-half-desktop is-three-quarters-tablet">
      <hr/>
      <div className ="group-items">
      <input type="text" name ="searchInput" class="input is-info is-medium" placeholder="Search your mentor" onChange ={this.onChangeHandler}/>
      <button className="button is-medium">Search</button>
      </div>
       <hr/>
      </div>
      </div>
    
    <div className="columns is-centered is-mobile" id="search-bar">
      <div className="column is-full-mobile is-half-desktop is-three-quarters-tablet">
      <Card/>
      </div>

    
    
      </div>
  </React.Fragment>
    )
  }
}
export default userSearch
