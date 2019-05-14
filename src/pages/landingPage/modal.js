import React, {useEffect} from "react";
import Button from "../../components/sub-components/button"
import InputField from "../../components/inputField"
import InputItems from "../../components/sub-components/inputItems"
import Modal from "../../components/modal"

const ModalGroup = (props) => {
  console.log(props.accountCreated)
const {submit,errors,click,change,currentModal} = props
const {email,password,password2} = errors
useEffect(()=> {
  console.log("here inside modal")
})
let content;
if(currentModal === "login") { 
content = 
    <form onSubmit ={submit}>
    <InputField err ={email} icon = "has-icons-left">
        <InputItems 
          type="email" 
          name ="email" 
          placeholder ="Please enter your email" 
          fontAwsome ="fas fa-envelope" 
          change ={change} />
    </InputField>

    <InputField err ={password} icon = "has-icons-left">
        <InputItems 
          type="password" 
          name="password" 
          placeholder = "Please enter your password" 
          fontAwsome ="fas fa-lock" 
          change ={change}/>
    </InputField>

    <Button  
          btnName ="Log in" 
          styles ="button is-warning" 
          type ="submit"/>
    </form>
} 
if(currentModal === "register") {
  content =(
    <form onSubmit ={submit}>
     <InputField err ={email} icon = "has-icons-left" > 
        <InputItems 
          type="email" 
          name ="email" 
          placeholder ="Please enter your email" 
          fontAwsome ="fas fa-envelope" 
          err ={email} 
          change ={change} />
      </InputField>

     <InputField err ={password} icon = "has-icons-left" > 
        <InputItems
          type="password" 
          name ="password" 
          placeholder ="Please enter your password" 
          fontAwsome ="fas fa-lock" 
          err ={password} 
          change ={change}/>
    </InputField >

     <InputField err ={password2} icon = "has-icons-left" >
        <InputItems 
          type="password" 
          name ="password2" 
          placeholder ="Please confirm your password" 
          fontAwsome ="fas fa-lock"  
          err ={password2} 
          change ={change}/>
      </InputField>
     <Button  btnName ="Create your account" styles ="button is-warning" type ="submit" />
     </form>
  )}
return (
    <Modal titre = "Co-Mentoring" click ={click}>
     {props.accountCreated ? <div className ="has-text-danger is-size-5 has-text-centered">Account created please login</div> : null}
    {content}
    </Modal>
  )
}
export default React.memo(ModalGroup) 

