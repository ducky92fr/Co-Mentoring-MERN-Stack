import React from 'react'
const Card  = props => {
  return (
    <div className ="card_user">
      <div className ="card_image">
  <img src="https://res.cloudinary.com/dcmvim0u6/image/upload/v1557839812/27-270956_mario-face-png-super-mario-face-png_oczjbj.jpg"/>
      </div>
      <div className ="card_infor">
      <div className ="head_text">Duc NGUYEN  <span>Paris</span></div>
      <div>Javascript <span> Python</span> </div>
      <div>Hi, ask me any questions, i'm good at everything but great at nothing</div>
      
      </div>
      <div className ="card_btn">
      <button className ="btn_grp">Connect</button>
      </div>
    </div>
  )
}

export default Card