import React,{Component} from 'react'
import { connect } from "react-redux";
import {withRouter,Redirect} from 'react-router-dom'
import UnvotedQuestion from './UnvotedQuestion'
import VotedQuestion from './VotedQuestion'
class Question extends Component{
state={
choice:"optionOne",
}
render()
{
    const{voted}=this.props
    
    if (this.props.error404) {
      return <Redirect to="/error404" />;
    }
    return(voted?<VotedQuestion question={this.props.question} user={this.props.user} authedUser={this.props.authedUser} />:

    <UnvotedQuestion question={this.props.question} user={this.props.user} authedUser={this.props.authedUser}/> )
}
}
function mapStateToProps({ questions, users, authedUser }, { match }) {
    const ID_QUESTION = match.params.ID_QUESTION;
    const question = questions[ID_QUESTION];
    let voted = false;
    const error404 = true;
    if (question === undefined) {
      return {
        error404,
      };
    }
 
    else{
      if (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)) {

        voted = true;
        
    
      }
    }
    const user = users[question.author];
    return {
      question,
      user,
      voted,
      authedUser,
    }
    }

  export default withRouter(connect(mapStateToProps)(Question));
