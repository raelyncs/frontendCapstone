import React, { useState, useEffect } from 'react'
import Question from './Question.jsx'

function QAList(props) {
  const [ questionsLimit, setQuestionsLimit ] = useState(2);

  var moreQuestions = (questionsLimit >= props.questions.length) ? null : <button onClick={()=>(setQuestionsLimit(questionsLimit + 2))}>MORE ANSWERED QUESTIONS</button>

  return (
    <div id="QAList">
      <ul>
        {props.questions.slice(0, questionsLimit).map(question => (
          <Question
            key={question.question_id}
            id={question.question_id}
            question={question}
            getQuestions={props.getQuestions}
          />
        ))}
      </ul>
      {moreQuestions}
      <button>ADD A QUESTION +</button>
    </div>

  )
}

export default QAList;

