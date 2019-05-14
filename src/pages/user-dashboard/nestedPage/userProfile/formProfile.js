import React from 'react'
import Button from "../../../../components/sub-components/button"
import InputField from "../../../../components/inputField"
import InputItems from "../../../../components/sub-components/inputItems"
import DropList from './dropdown-select'
import Upload from './uploadFile'
const formProfile = (props) => {
  const {submit,change,fileName,errors} = props
  const {firstName,lastName,companyCity,skill1,skill2,avatar} =errors
  
  return (
    <form onSubmit={submit}>
    <InputField err ={firstName} icon = "has-icons-left" label ="Your first name">
    <InputItems 
        type="text" 
        name ="firstName" 
        placeholder ="Please enter your first name" 
        fontAwsome =" fas fa-user" 
        change ={change} />
    </InputField>
    <InputField err ={lastName} icon = "has-icons-left" label ="Your last name">
    <InputItems 
        type="text" 
        name ="lastName" 
        placeholder ="Please enter your last name" 
        fontAwsome =" fas fa-user" 
        change ={change} />
    </InputField>
    <InputField err ={companyCity} icon = "has-icons-left" label ="Your living city">
    <InputItems 
        type="text" 
        name ="companyCity" 
        placeholder ="Please enter your living city" 
        fontAwsome ="far fa-building"
        change ={change}/>
    </InputField>
    <DropList err1 = {skill1} err2 ={skill2} change = {change} />
    <Upload err = {avatar} selected={fileName ? "Selected file" :"Please choose a file"} fileName ={fileName ? "You have selected " + fileName :null} change ={change}/>
    <hr/>
    <Button  btnName ="Submit your profile" styles ="button is-warning" type ="submit" />
  </form>
  )
}
  

export default formProfile

