import React,{useEffect} from "react";
import Aux from "../../components/hoc/Aux"
import { NavLink } from 'react-router-dom';
import Button from '../../components/sub-components/button'

const NavBar = (props) => { 
  useEffect(()=> {
    console.log("here inside navBar")
  })
  return (
    <Aux>
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
          <NavLink className="navbar-item" to ="/user">
          <div className ="has-text-link has-text-weight-bold is-family-code">CO-MENT</div>
          </NavLink>
          <div  role="button" onClick ={props.toggleNav} className={"navbar-burger burger "+props.navToggle} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" ></span>
          <span aria-hidden="true" ></span>
          <span aria-hidden="true" ></span>
          </div>
      </div>
      <div id="navbarBasicExample" className={" navbar-menu " + props.navToggle}>
        <div className="navbar-start is-family-code">
            <NavLink className="navbar-item " to ="/user">Home</NavLink>
            <NavLink className="navbar-item" to ="/user/user-profile">Edit Profile</NavLink>
            <NavLink className="navbar-item" to ="/user/user-chat">Chat</NavLink>
        <NavLink className="navbar-item" to ="/user/user-search">Search</NavLink>
        </div>

        <div className="navbar-end">
            <div className="navbar-item">
                <Button  btnName ="Logout" styles ="button is-link" type ="submit" click ={props.click}/>
            </div>
        </div>

      </div>
    </nav>
    </Aux>
  )
}
export default React.memo(NavBar)
