import React,{Component} from 'react'


import QuestionComp from './QuestionComp'

class QuestionCompList extends Component{
render(){

   const {questions}=this.props
   
    return(
 <div>

        {questions.length > 0 ? (
          questions.map((question) => <QuestionComp key={question.id} question={question} />)
        ) : (
          <p id="no-questions">No Questions Here, Check The Other Tab</p>
        )}
   
   
</div>

    )
}
}

export default QuestionCompList;