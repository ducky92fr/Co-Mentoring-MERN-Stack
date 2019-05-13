import React, {useEffect} from "react";
import Aux from "../../components/hoc/Aux"
import Button from "../../components/sub-components/button"
const Btn = (props) => { 
  useEffect(() => {
    console.log("useEffect here in Button group")
  })
  return (
    <Aux>
      <div className ="btn">
      <Button btnName ="Register" styles ="button is-info " click = {() => props.click("register")}/>
      <Button btnName ="Log In" styles ="button is-info " click = {() => props.click("login")}  />
      </div>
    </Aux>
  )
}
export default React.memo(Btn)
