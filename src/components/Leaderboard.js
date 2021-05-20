import React,{Component} from 'react'
import { connect } from 'react-redux'
import {Card} from 'react-bootstrap'
class Leaderboard extends Component{
    render(){
    const { adjustedUsers } = this.props;
return(
    <React.Fragment>
      
        {adjustedUsers.map((x)=>(
            <Card key={x.id} >
          
            <Card.Img style={{width:180,height:160}}variant="top" src={x.avatarURL}></Card.Img>
                <Card.Body>
                  <Card.Title className="TitleCard">
                    {x.name} 
                    </Card.Title>
                    <Card.Text >
                       <b><em>Score : </em></b> {x.score}
                    </Card.Text>
                    <Card.Text >
                       <b><em>Asked Polls : </em></b> {x.questions.length}
                    </Card.Text>
                    <Card.Text >
                       <b><em>Answered Polls : </em></b> { Object.keys(x.answers).length}
                    </Card.Text>
                 
            
                </Card.Body>
            
            
            
            </Card>
    ))}
    </React.Fragment>
)

    }
}

function mapStateToProps({ users }) {
    
    const adjustedUsers = Object.values(users).map(
        (adjustedUser) =>
          Object.assign({}, adjustedUser, {
            score: adjustedUser.questions.length+ Object.keys(adjustedUser.answers).length ,
          })).sort((i, j) => j.score - i.score);
  
    return {
        adjustedUsers,
    };
  }
  
  export default connect(mapStateToProps)(Leaderboard);