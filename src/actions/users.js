

export const GET_USERS = " GET_USERS";
export const ADD_USER = "ADD_USER";
export const ASSIGN_VOTE = "ASSIGN_VOTE";
export const ASSIGN_QUESTION = "ASSIGN_QUESTION";

export function assignVote({ authedUser, qid, answer }) {
  return {
    type: ASSIGN_VOTE,
    authedUser,
    qid,
    answer,
  };
}



export function assignQuestion(authedUser, qid) {
  return {
    type: ASSIGN_QUESTION,
    authedUser,
    qid,
  };
}

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}


