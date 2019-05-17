import React from 'react'
const cardConnect  = props => {
  return (
    <div className ="card_user">
      <div className ="card_infor">
      <div className ="has-text-weight-bold">{props.type}<span className="has-text-weight-normal">{props.fullName}</span> </div>
      <div className ="has-text-weight-bold">Date of connection: <span className="has-text-weight-normal">{props.date}</span> </div>
      </div>
      <div className ="card_btn">
      <button value ={props.userID} className ="btn_grp" onClick ={props.clickEnd}>End</button>
      </div>
    </div>
  ) 
}

export default cardConnect
