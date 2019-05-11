// import { Link } from "react-router-dom";
import React, {useEffect} from "react";
import Aux from "../components/hoc/Aux"
import Button from "../components/sub-components/linkBtn"
const Btn = (props) => { 
  useEffect(() => {
    console.log("useEffect here in Button group")
  })
  return (
    <Aux>
      <Button btnName ="Register" styles ="button" click = {() => props.click("register")}/>
      <Button btnName ="Log In" styles ="button" click = {() => props.click("login")}  />
    </Aux>
  )
}
export default React.memo(Btn)
