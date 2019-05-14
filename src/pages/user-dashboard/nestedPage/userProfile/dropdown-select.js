import React from 'react'
import InputField from '../../../../components/inputField'
import Select from '../../../../components/sub-components/selectItems'
import skillArray from "../../../../config/skill"
const dropDown  = props  => {
  const optionSkill = skillArray.map(domaine => {
    const key = Object.keys(domaine)[0]
      const option = domaine[key].map(skill => (<option value ={skill} key = {Math.random()}>{skill}</option>))
     return (<optgroup key = {Math.random()} label = {key}>{option}</optgroup>)
  })
  return (
    <React.Fragment>
    <InputField err ={props.err1} label ="Your first skill">
        <Select defaultVal ="DEFAULT" change ={props.change}>
            <option value ="DEFAULT" disabled>Select an option</option>
            {optionSkill}
        </Select>
        <Select defaultVal ="DEFAULT" change ={props.change}>
            <option value ="DEFAULT" disabled>Your Level</option>
            <option value ="1" >Beginner</option>
            <option value ="2" >Intermediate</option>
            <option value ="3" >Advanced</option>
        </Select>
    </InputField>

    <InputField err ={props.err} label ="Your second skill">
    <Select defaultVal ="DEFAULT" change ={props.change}>
        <option value ="DEFAULT" disabled>Select an option</option>
        {optionSkill}
    </Select>
    <Select defaultVal ="DEFAULT" change ={props.change}>
        <option value ="DEFAULT" disabled>Your Level</option>
        <option value ="1" >Beginner</option>
        <option value ="2" >Intermediate</option>
        <option value ="3" >Advanced</option>
    </Select>
  </InputField>
  <InputField err ={props.err} label ="Your status">
    <Select defaultVal ="DEFAULT" change ={props.change}>
        <option value ="DEFAULT" disabled>Select an option</option>
        <option value ="true" >Available</option>
        <option value ="false" >Not availalbe</option>
    </Select>
  </InputField>
</React.Fragment>
  )
}

export default dropDown