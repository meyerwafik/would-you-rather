import React, { Component } from "react";
import {Form,Button} from 'react-bootstrap'
import { connect } from "react-redux";
import { setauthedUser } from "../actions/authedUser";
import {withRouter} from 'react-router-dom'
class Login extends Component{
    state={
        authedUser:''
    }
    onChangeHandler = (event) => {
    
      this.setState({
        authedUser: event.target.value
      })
     
  }
    signInHandler = (event) => {
     
      event.preventDefault();
     
        if(this.state.authedUser===""){
          alert("Choose a user")
        } else{
        const { dispatch } = this.props;
       dispatch(setauthedUser(this.state.authedUser))
        }
      }
    render() {
        const {users} = this.props
       
        return(
           <div>
                <h1 style={{clear:"left"}}>
                    Please Login
                </h1>
             
            <Form onSubmit={this.signInHandler}>
              <Form.Group >
                <Form.Label>Choose User to Login</Form.Label>
                <Form.Control as="select" name={this.props.authedUser} onChange={this.onChangeHandler}>
                  <option key={-1}>Select User from below</option>
                  {users &&Object.keys(users)
                  .map((id) => ({
                    avatarURL: users[id].avatarURL,
                    id: users[id].id,
                    name: users[id].name,
                    }))
                    .map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                        </option>
                    ))}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit"
                        >
                            Login
                </Button>
                    </Form>
         
                    </div>
        )
    }
   
}
const mapStateToProps = ({ users,authedUser }) => ({
    users,
    authedUser,
  })

export default withRouter(connect(mapStateToProps)(Login))