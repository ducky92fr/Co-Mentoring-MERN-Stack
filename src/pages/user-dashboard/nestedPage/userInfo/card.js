import React from 'react'
import Aux from '../../../../components/hoc/Aux'
const Card  = props => {
  return (
    <div className ="card_user">
      <div className ="card_infor">
      <div className ="head_text">{props.type}<span>{props.fullName}</span></div>
      <div className ="has-text-weight-bold">Date of request: <span className="has-text-weight-normal">{props.date}</span> </div>
      <div className ="has-text-weight-bold"><span className="has-text-weight-normal">{props.message}</span></div>
      </div>
      <div className ="card_btn">
      {props.sent ? 
      <button value ={props.userID} className ="btn_grp" onClick ={props.click}>Cancel</button>
      :
      <Aux>
      <button value ={props.userID} namesent = {props.fullName} className ="btn_grp" onClick ={props.clickAccept}>Accept</button>
      <button value ={props.userID} namesent = {props.fullName} className ="btn_grp" onClick ={props.click}>Refuse</button>
      </Aux>
    }
     
      </div>
    </div>
  ) 
}

export default Card
