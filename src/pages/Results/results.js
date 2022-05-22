import React, { useState, useEffect } from 'react';
import Navbar from '../../component/navbar/navbar';
import "./style.css";
import axios from 'axios';
import TopTable from './top-table';
import UserResult from './UserResult';
import Logout from '../../component/logout/logout';
const Results = () => {
    const [userResult, setResult] = useState()
    const [topStudents, setTopStudents] = useState()
    //const [user,setUser] = useState()
    
    useEffect(()=>{
        
        async function getTopStudents() {
            await axios.get("https://exam-ar.herokuapp.com/top",{
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }).then(data=>{
                setTopStudents(data.data)
            })
        }
        async function getResult() {            
            //get User Result
            await axios.get("https://exam-ar.herokuapp.com/user/result",{
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }).then(data=>{
                setResult(data.data)
            }).then(()=>getTopStudents())
        }
        
        getResult()
    },[])
    return (
        <div>
            <Navbar/>
            <UserResult userResult={userResult}/>
            <Logout/>
            <TopTable topStudents={topStudents}/>
        </div>
    );
};

export default Results;

// async function auth() {
        
//     const sendJWT = await axios.get("https://exam-ar.herokuapp.com/ensure",{
//         headers: {
//             "x-access-token": localStorage.getItem("token")
//         }
//     }).then(response=>{
//         if(response.data.errorMsg){
//             history("/")
//         } else{

//             setUser(response.data)
//         }
//     }).catch(err=>{
//         history("/")
//     })
// }
// auth()