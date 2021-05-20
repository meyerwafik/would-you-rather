import React,{Component} from 'react'
import {Form,Card,Button} from 'react-bootstrap'
import { connect } from "react-redux";
import { handlePollVoted } from "../actions/questions";
import {withRouter} from 'react-router-dom'
class UnvotedQuestion extends Component{
    state={
        vote:""
    }
    voteChanged = (e) => {
        this.setState(
            { vote: e.target.name }
        )
        
    }
    voteSubmitted = (e) => {
        e.preventDefault()
        const { dispatch, question } = this.props;
        dispatch(handlePollVoted(question.id, this.state.vote));
    }
    render(){
        const {question,user}=this.props
        return(
            <React.Fragment>
             <Card >
        <Card.Img style={{width:180,height:160}}variant="top" src={user.avatarURL}></Card.Img>
              <Card.Body>
                <Card.Title className="TitleCard">
                  {user.name} asks:
                  </Card.Title>
                  <Card.Text style={{color:'blue', font_weight:'bold' }}>
                      Would you rather?
                  </Card.Text>
                  <Form onSubmit={this.voteSubmitted}>
                        <div className="mb-3" >
                            <Form.Check
                                custom
                                onChange={this.voteChanged}
                                checked={this.state.vote === "optionOne"}
                                id="optionOne"
                                type={"radio"}
                                name="optionOne"
                                label={question.optionOne.text}
                            />
                            <Form.Check
                                custom
                                onChange={this.voteChanged}
                                checked={this.state.vote === "optionTwo"}
                                id="optionTwo"
                                type={"radio"}
                                label={question.optionTwo.text}
                                name="optionTwo"
                            />
                        </div>
                        <Button variant="primary" type="submit" disabled={!this.state.vote} onSubmit={this.voteSubmitted}>
                            Submit
                          </Button>
                    </Form>
          
              </Card.Body>
          </Card>
          </React.Fragment> );
       
    }
}
export default withRouter(connect()(UnvotedQuestion));