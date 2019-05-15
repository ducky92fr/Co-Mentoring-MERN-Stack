import React,{Component} from "react";
import Container from './container'
import ButtonGroup from './button_group'
import './userInfo.css'
class userInfo extends Component { 
  render(){
  return (
   <React.Fragment>
     <hr/>
    <div className=" columns is-desktop is-centered">
      <div className="column is-one-third ">
         <div className="red has-background-warning">
          <div className="columns is-desktop">
            <div className="column">
              <div>
              <figure className="image is-128x128 btn_group">
                <img src="https://www.mariowiki.com/images/thumb/9/94/MushroomMarioKart8.png/1200px-MushroomMarioKart8.png"/>
              </figure>
              <div className ="container_content btn_group">
                <div>Medal Bronze</div>
                <div>Medal Gold</div>
                </div>
              <div>FirstName</div>
              <div>lastName</div>
              <div>skill</div>
            </div>
            </div>
  
          </div>
      </div>
      </div>
      <div className="column is-two-fifths">
         <div className="green ">
          <div className="columns is-desktop">
            <div className="column">
          <Container name ="Duc NGUYEN" date ="16/02/2002" message="Hello blah blah">
          <ButtonGroup/>
          </Container>
          </div>
            </div>
  
          </div>
         </div>
      </div>
      </React.Fragment>
  )
}}
export default userInfo
