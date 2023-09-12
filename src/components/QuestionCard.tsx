import {QuestionCardType} from '../Types/QuestionCardsType'
import { Wrapper,ButtonWrapper} from './QuestionCard.styles'


const QuestionCard: React.FC<QuestionCardType> = ({question,answers,callback,userAnswer,questionNr,totalQuestions}) => {
  return (
    <Wrapper>
       <p>
        Question : {questionNr} / {totalQuestions}
       </p>

         <p dangerouslySetInnerHTML={{__html: question}}></p>
         <div>
              {answers.map(answer => (
                <ButtonWrapper correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} key={answer}>
                    <button disabled={userAnswer ? true:false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}>

                        </span>
                    </button>
                </ButtonWrapper>
              ))}
         </div>
    </Wrapper>
  )
}

export default QuestionCard