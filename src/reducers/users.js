import { GET_USERS,ASSIGN_QUESTION,ASSIGN_VOTE } from '../actions/users'

export default function users (state = {}, action) {
  const {authedUser,qid,answer}=action
  switch(action.type) {
    case GET_USERS :
      return {
        ...state,
        ...action.users
      };
    case ASSIGN_QUESTION:
        return {
            ...state,
            [authedUser]: {
              ...state[authedUser],
              questions: state[authedUser].questions.concat(qid),
            },
          };
    case ASSIGN_VOTE:
        return {
            ...state,
            [authedUser]: {
                ...state[authedUser],
            answers: Object.assign(state[authedUser].answers, { [qid]: answer }),
            },
        };
    default :
      return state
  }
}