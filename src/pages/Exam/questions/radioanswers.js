import React,{useContext} from 'react';
import AnswersContext from "./answersContext"

const RadioAnswers = ({singlequestion}) => {
    const {setAnswers,answers} = useContext(AnswersContext)

    const onValueChange = async (e)=>{
        const { name, value } = e.target;
        setAnswers({...answers,[name]:value})
        await console.log(answers)
    }
    return (
        <div className="answers">
            {
                singlequestion.answers.map((singleanswer,i)=>{
                    const answerID = ()=>{
                        if (singlequestion.toforder) {
                            return "tof"+singlequestion.toforder
                        } else {
                            return "choosing"+singlequestion.choosingorder
                        }
                    }
                    return (
                        <div key={answerID()+"."+(i+1)}>
                            <input type="radio" 
                            id={answerID()+"."+(i+1)}
                            name={answerID()}
                            value={singleanswer} checked={answers[answerID()]===singleanswer}
                            onChange={onValueChange}/>
                            <label htmlFor={answerID()+"."+(i+1)}>{singleanswer}</label>
                            <br/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default RadioAnswers;