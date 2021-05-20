import React,{Component} from 'react'

import {ProgressBar,Card} from 'react-bootstrap'

class VotedQuestion extends Component{
  
render(){
    const{question,user,authedUser}=this.props
    
     const percOptionOne=Math.round(((question.optionOne.votes.length)/(question.optionOne.votes.length+question.optionTwo.votes.length))*100)
    const optionVote=(question.optionOne.votes.includes(authedUser))?true:false;
     const percOptionTwo=100-percOptionOne
    return (
        <React.Fragment>
        <Card >
   <Card.Img style={{width:180,height:160}}variant="top" src={user.avatarURL}></Card.Img>
         <Card.Body>
           <Card.Title className="TitleCard">
             {user.name} asked:
             </Card.Title>
             <Card.Text style={{color:'blue', font_weight:'bold' }}>
                 Would you rather?
             </Card.Text>
             <div>
             <Card.Text >
                {question.optionOne.text}
                </Card.Text>
                {optionVote ?<img src="/images/yourvote.png" alt="your vote" width="40px" heigth="40px" style={{float:"right"}}/>:null}
                <ProgressBar now={percOptionOne} label={`${percOptionOne}%`}/>
            
             </div>
             <br/>
             <br/>
             <div>
             <Card.Text >
                {question.optionTwo.text}
                </Card.Text>
                {optionVote? null:<img src="/images/yourvote.png" alt="your vote" width="40px" heigth="40px" style={{float:"right"}}/>}
                <ProgressBar now={percOptionTwo} label={`${percOptionTwo}%`}/>
             
             </div>
             </Card.Body>
             </Card >
            </React.Fragment>
    )
}
}
export default VotedQuestion;