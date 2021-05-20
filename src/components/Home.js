import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import QuestionCompList from "./QuestionCompList";
import PollNav from "./PollNav"

class Home extends Component {
  render() {
    return (
      <React.Fragment>
      {this.props.authedUser !== null ? (
      
      <div className="home">
        
     <PollNav/>
     <Switch>
              <Route exact path="/home">
                <Redirect to="home/unvoted" />
               
              </Route>
              <Route path="/home/voted">
            
              <QuestionCompList questions={this.props.answeredPolls}/>
               
              </Route>
              <Route path="/home/unvoted">
              <QuestionCompList questions={this.props.unAnsweredPolls}/>
              </Route>
            </Switch>
            </div>
           
        ) : (
          <div>Loading</div>
        )} 
        
     </React.Fragment>
    );
  }
}



function mapStateToProps({ authedUser, users, questions }) {
   
     const signedUserAnswers = Object.keys(users[authedUser].answers);
     
     const answeredPolls = Object.values(questions).filter((question) => signedUserAnswers.includes(question.id)) 
     .map((question) => Object.assign({}, question, { type: "voted" })).sort((a, b) => b.timestamp - a.timestamp);
     
     const unAnsweredPolls = Object.values(questions).filter((question) => !signedUserAnswers.includes(question.id))
     .map((question) => Object.assign({}, question, { type: "unvoted" })).sort((a, b) => b.timestamp - a.timestamp);
    
     return {
         answeredPolls,
         unAnsweredPolls,
       }
 }

export default connect(mapStateToProps)(Home);
