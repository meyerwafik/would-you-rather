import React, { Component } from 'react';

import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import {Navbar,Nav,Image,Button}from 'react-bootstrap'
import {setauthedUser} from "../actions/authedUser"
class NavBar extends Component{
  handle=(event)=>{
    const { dispatch } = this.props;
    dispatch(setauthedUser("NOT_ASSIGNED"));
  };
  render(){
    const { not_assigned, user } = this.props;
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">Would you rather?</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/add">New Question</Nav.Link>
            <Nav.Link as={Link} to="/leaderboard">leaderboard</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse>
    {not_assigned? null:(<React.Fragment>
          <Navbar.Text style={{ marginRight: "20px" }}>
          
                        {user.name}
                    </Navbar.Text>
                    <Image src={user.avatarURL} roundedCircle style={{ width: "auto", height: 60, marginRight: "20px" }} />
                    <Nav.Link  onClick={this.handle}>
                       <Button style={{color:"white"}}>logout
                       </Button>
                       </Nav.Link>
                    </React.Fragment>)}
                </Navbar.Collapse>
   
</Navbar>
  )
  }
}
function mapStateToProps({ authedUser, users }) {
  
  const user = users[authedUser];
  let not_assigned = false;
  if (authedUser === "NOT_ASSIGNED") {
    not_assigned = true;
  }
  return {
    user,
    not_assigned,
  };
}
export default  connect(mapStateToProps)(NavBar);




