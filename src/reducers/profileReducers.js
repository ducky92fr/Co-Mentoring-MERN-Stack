import {PROFILE_CREATED, ISHASPROFILE,REMOVE_MESSAGE_PROFILE,GET_PROFILE} from '../actions/types'
import isEmpty from '../validation/isEmp'

const initialState ={
  profileCreated :false,
  message:"",
  profileDetails:{}
}

const reducer = (state = initialState,action) => {
  switch(action.type){
    case PROFILE_CREATED:
    return {
      ...state,
      profileCreated: !isEmpty(action.payload),
      message: "Your profile is created now you have full access"
    }
    case ISHASPROFILE:
    return {
      ...state,
      profileCreated: true
    }
    case REMOVE_MESSAGE_PROFILE:
    return {
      ...state,
      message:""
    }
    case GET_PROFILE:
    return {
      ...state,
      profileDetails:action.payload
    }
    default:
    return state
  }
}

export default  reducer
