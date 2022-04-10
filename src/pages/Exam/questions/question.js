import React from 'react';
import RadioAnswers from "./radioanswers";
const Question = ({questionsArray, type}) => {
    
    return (
        <>
            {
                questionsArray?
                questionsArray.map((singlequestion,id)=>{
                    return (
                    <div className={"question " +type} key={singlequestion._id}>
                        <p>{id+1}-{singlequestion.question}</p>
                        <RadioAnswers singlequestion={singlequestion}/>
                    </div>
                )
                }):"جاري التحميل"
            }
        </>
    );
};

export default Question;