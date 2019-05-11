import React, {useEffect} from "react";
import Button from "../components/sub-components/linkBtn"
import Field from "../components/sub-components/inputField"
import Aux from "../components/hoc/Aux"
import './modal.css';

const Modal = (props) => {
const {submit,errors,click,change,currentModal} = props
const {firstName,lastName,email,password,password2} = errors
useEffect(()=> {
  console.log("here inside modal")
})
let content;
if(props.currentModal === "login") { 
content = 
  <Aux>
    <form onSubmit ={submit}>
    <Field type="email" name="email" placeholder ="Please enter your email" fontAwsome ="fas fa-envelope" err ={email} change ={change}/>
    <Field type="password" name="password" placeholder = "Please enter your password" fontAwsome ="fas fa-lock" err ={password} change ={change} />
    <Button  btnName ="Log in" styles ="button is-warning" type ="submit"/>
    </form>
  </Aux>
} 
if(currentModal === "register") {
  content =
  <Aux>
    <form onSubmit ={submit}>
     <Field type="text" name="firstName" placeholder ="Please enter your first name" fontAwsome ="fas fa-user" err ={firstName} change ={change} />
     <Field type="text" name="lastName" placeholder ="Please enter your last name" fontAwsome ="fas fa-user" err ={lastName} change ={change}/>
     <Field type="email" name ="email" placeholder ="Please enter your email" fontAwsome ="fas fa-envelope" err ={email} change ={change} />
     <Field type="password" name ="password" placeholder ="Please enter your password" fontAwsome ="fas fa-lock" err ={password} change ={change}/>
     <Field type="password" name ="password2" placeholder ="Please confirm your password" fontAwsome ="fas fa-lock"  err ={password2} change ={change} />
     <Button  btnName ="Create your account" styles ="button is-warning" type ="submit" />
     </form>
</Aux>}
return (
<div className="modal is-active">
  <div className="modal-background" onClick ={click}/>
    <div className="modal-content">
    <div className="titre">Co-Mentoring</div>
    {content}
    </div>
  <button className="modal-close is-large" aria-label="close" onClick = {click}/>
</div>
  )
}
export default Modal

