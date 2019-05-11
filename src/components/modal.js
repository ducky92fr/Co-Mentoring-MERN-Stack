import React, {useEffect} from "react";
import Button from "../components/sub-components/linkBtn"
import Field from "../components/sub-components/inputField"
import Aux from "../components/hoc/Aux"
import './modal.css';

const Modal = (props) => {
useEffect(()=> {
  console.log("here inside modal")
})
let content;
if(props.currentModal === "login") { 
content = 
  <Aux>
    <form onSubmit ={props.submit}>
    <Field type="email" name="email" placeholder ="Please enter your email" fontAwsome ="fas fa-envelope" error ={props.err} />
    <Field type="password" name="password" placeholder = "Please enter your password" fontAwsome ="fas fa-lock" error ={props.err}/>
    <Button  btnName ="Log in" styles ="button is-warning" type ="submit"/>
    </form>
  </Aux>
} 
if(props.currentModal === "register") {
  content =
  <Aux>
    <form onSubmit ={props.submit}>
     <Field type="text" name="firstName" placeholder ="Please enter your first name" fontAwsome ="fas fa-user" error ={props.err}/>
     <Field type="text" name="lastName" placeholder ="Please enter your last name" fontAwsome ="fas fa-user"  error ={props.err}/>
     <Field type="email" name ="email" placeholder ="Please enter your email" fontAwsome ="fas fa-envelope" error ={props.err}/>
     <Field type="password" name ="password" placeholder ="Please enter your password" fontAwsome ="fas fa-lock" error ={props.err}/>
     <Field type="password" name ="password2" placeholder ="Please confirm your password" fontAwsome ="fas fa-lock"  error ={props.err}/>
     <Button  btnName ="Create your account" styles ="button is-warning" type ="submit" />
     </form>
</Aux>}
return (
<div className="modal is-active">
  <div className="modal-background" onClick ={props.click}/>
    <div className="modal-content">
    <div className="titre">Co-Mentoring</div>
    {content}
    </div>
  <button className="modal-close is-large" aria-label="close" onClick = {props.click}/>
</div>
  )
}
export default Modal

