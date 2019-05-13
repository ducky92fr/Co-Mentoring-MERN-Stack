import {SET_CURRENT_USER} from '../actions/types'
import isEmpty from '../validation/isEmp'
const initialState ={
  isAuth: false,
  user:{},
}

const reducer = (state = initialState,action) => {
  switch(action.type){
    case SET_CURRENT_USER:
    return {
      ...state,
      isAuth: !isEmpty(action.payload),
      user:action.payload
    }
    default:
    return state
  }
}

export default  reducer
