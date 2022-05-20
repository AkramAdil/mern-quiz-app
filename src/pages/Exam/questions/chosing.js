import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Question from './question';


const Chosing = () => {
    const [questionsArray,setQuestionsList] = useState()
    useEffect(()=>{
        async function getList() {
            await axios.get("http://127.0.0.1:9090/choosing").then(results=>setQuestionsList(results.data))
        }
        getList()
    },[])
    return (
        <div className="choseAnswer">

            <p className="QHeader">أسئلة الاختيار من متعدد</p>
            <Question questionsArray={questionsArray} type="chose"/>
        </div>
    );
};

export default Chosing;