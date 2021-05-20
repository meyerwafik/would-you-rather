import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
class QuestionComp extends Component{
    render(){
        const { user } = this.props;
        const {optionOne,id}=this.props.question
        
       
        
        return (<Card className="card" >
          
          <Card.Img style={{width:180,height:160}}variant="top" src={this.props.user.avatarURL}></Card.Img>
              <Card.Body>
                <Card.Title className="TitleCard">
                  {user.name} asks:
                  </Card.Title>
                  <Card.Text style={{color:'blue', font_weight:'bold'}}>
                      Would you rather?
                  </Card.Text>
                <Card.Text>
                   
                      {optionOne.text}
                 </Card.Text>
                 <NavLink to={`/questions/${id}`}>
                   <Button > View Poll </Button>
               </NavLink>
          
              </Card.Body>
          
          
          
          </Card>
    
    );
           

        
    }
}
function mapStateToProps({ users }, { question }) {
    const user = users[question.author];
    return {
      user,
    };
  }
export default connect(mapStateToProps)(QuestionComp)


