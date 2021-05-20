import { SET_SIGNED_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_SIGNED_USER :
      return action.id
    default :
      return state
  }
} 