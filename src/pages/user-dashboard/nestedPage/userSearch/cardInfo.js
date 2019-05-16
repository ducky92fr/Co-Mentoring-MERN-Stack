import React from 'react'
const Card  = props => {
  return (
    <div className ="card_user">
      <div className ="card_image">
  <img alt ="avatar" src={props.avatar}/>
      </div>
      <div className ="card_infor">
      <div className ="head_text">{props.fullName}  <span>{props.city}</span></div>
      <div>{props.skill1} <span> {props.skill2}</span> </div>
      <div>Hi, ask me any questions, i'm good at everything but great at nothing</div>
      
      </div>
      <div className ="card_btn">
      <button value ={props.userID} className ="btn_grp" onClick ={props.click}>Connect</button>
      </div>
    </div>
  )
}

export default Card