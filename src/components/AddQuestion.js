import React,{Component} from 'react'
import {Form,Button} from "react-bootstrap"
import {handleAddPoll} from '../actions/questions'
import  {  Redirect }from 'react-router-dom'
import { connect } from "react-redux";
class AddQuestion extends Component{
    state={
        firstOption:'',
        secondOption:'',
        proceed:false

    }
    formChange = (event) => {
        event.preventDefault();
       
        this.setState({ [event.target.id]: event.target.value });
      };
      formSubmit=(event)=>{
          event.preventDefault();
          const { dispatch } = this.props;
          const { firstOption, secondOption } = this.state;
          if (firstOption.trim() === "" || secondOption.trim() === "") {
            alert("No empty option is allowed.");
          } else {
             
           
            dispatch(handleAddPoll(firstOption, secondOption));
            this.setState({ proceed: true });
          }
      }
      render(){
        if (this.state.proceed) {
            return <Redirect to="/" />;
          }
          return (
          <React.Fragment>
                <h1>Would you rather?</h1>
               <br/>
               <br/>
                <Form onSubmit={this.formSubmit}>
                    <Form.Group controlId="firstOption">
                        <Form.Label>Option 1</Form.Label>
                        <Form.Control name="op1" type="text" placeholder="First Option" onChange={this.formChange} />
                    </Form.Group>

                    <Form.Group controlId="secondOption">
                        <Form.Label>Option 2</Form.Label>
                        <Form.Control name="op2" type="text" placeholder="Second Option" onChange={this.formChange} />
                    </Form.Group>
                    <br/>
              
                    <Button variant="primary" type="submit">
                        Add Poll
            </Button>
                </Form>
                </React.Fragment>
              );
          
      }
}
export default connect()(AddQuestion);