import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { assignVote ,assignQuestion} from "../actions/users";
export const ADD_QUESTION = "ADD_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const ADD_VOTE = "ADD_VOTE";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addVote({ authedUser, qid, answer }) {
  return {
    type: ADD_VOTE,
    authedUser,
    qid,
    answer,
  };

}

export function handlePollVoted(qid, answer) {
  return (dispatch, getState) => {
    
    const { authedUser } = getState();
    dispatch(addVote({ authedUser, qid, answer }));
    dispatch(assignVote({ authedUser, qid, answer }));
    return saveQuestionAnswer({ authedUser, qid, answer })
      
  };
}
export function handleAddPoll(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => {
     
      dispatch(addQuestion(question));
      dispatch(assignQuestion(authedUser, question.id));
    });
  };
}