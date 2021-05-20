import React, { Component } from "react";
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import NavBar from './NavBar'
import AddQuestion from './AddQuestion'
import Home from './Home'
import Error404 from './Error404'
import Leaderboard from './Leaderboard'
import { connect } from 'react-redux'
import  { Route, Switch, Redirect }from 'react-router-dom'
import Question from "./Question";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
render(){
  return(
    <React.Fragment>
      {this.props.loading? null:(
        <React.Fragment>
          <NavBar/>
          {this.props.not_assigned?
          <Login/>:
          <Switch>
            <Route exact path="/">
                <Redirect to="home"/>
            </Route>
            <Route path="/home">
          <Home/>
            </Route>
            <Route path="/questions/:ID_QUESTION">
          <Question/>
            </Route>
            <Route path="/leaderboard">
          <Leaderboard/>
            </Route>
            
            <Route path="/add">
         <AddQuestion/>
            </Route>
            <Route path="/error404">
            <Error404/>
            </Route>
          </Switch>
          
        }
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    not_assigned: authedUser === "NOT_ASSIGNED",
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => dispatch(handleInitialData()),
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
