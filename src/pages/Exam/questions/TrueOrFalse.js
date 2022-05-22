import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Question from './question';

const TrueOrFalse = () => {
    const [questionsArray,setQuestionsList] = useState()
    useEffect(()=>{
        async function getList() {
            await axios.get("https://arquiz.herokuapp.com/trueorfalse").then(results=>setQuestionsList(results.data))
        }
        getList()
    },[])
    return (
        <div className="writeAnswer">
            <p className="QHeader">أي العبارات التالية صحيح و أيها خطأ؟</p>
            <Question questionsArray={questionsArray} type="write"/>
        </div>
    );
};

export default TrueOrFalse;