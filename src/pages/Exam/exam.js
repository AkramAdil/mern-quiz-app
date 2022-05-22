import React,{useEffect,useState} from "react"
import Navbar from "./../../component/navbar/navbar";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./style.css";
import InfoHeader from "./infoHeader";
import Questions from "./questions/questions";

import AnswersContext from "./questions/answersContext"
export default function Exam() {
    const [user, setUser] = useState()
    const [answers, setAnswers] = useState({})
    const history = useNavigate()
    useEffect(()=>{
        axios({
            url:"https://exam-ar.herokuapp.com/ensure",
            method: "GET",
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(data=>setUser(data.data.userData))
    },[])
    async function sendResult(e) {
        e.preventDefault()
        await axios.post("https://exam-ar.herokuapp.com/quiz/results",
            {
                answers
            },
            {
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }
        ).then(data=>{
            if(!data.data.isAuth) {
                history("/")
            }
            console.log(data)
            history("/results")
        })
    }
    
    return (
        <>

        <Navbar></Navbar>

        <div className="container">
            
            <InfoHeader user={user}></InfoHeader>

            <h2 id="start">بداية الامتحان</h2>

            <div className="theExam">
                <form onSubmit={sendResult} className="formquiz">
                    <AnswersContext.Provider value={{answers, setAnswers}}>
                        <Questions/>
                    </AnswersContext.Provider>
                    <input type="submit" id="go" value="ارسال اجابتك"/>
                </form>
            </div>

            <h2 id="end">انتهى الامتحان</h2>
            <p>*ملحوظة: بالضغط عل زر الارسال لا يمكنك الترااجع أ, تغير اجابتك</p>
        </div>
    </>
    )
}