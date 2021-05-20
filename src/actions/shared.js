import { getInitialData } from "../utils/api";
import { getUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";
import { setauthedUser } from "../actions/authedUser";


const SIGNED_ID = "NOT_ASSIGNED";

export function handleInitialData() {
  return (dispatch, getState) => {
  
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(setauthedUser(SIGNED_ID));
    
    });
  };
}