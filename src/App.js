import React, { useState, useMemo } from "react"
import Home from "./pages/Home/Home";
import Exam from "./pages/Exam/exam";
import Results from "./pages/Results/results";
import HowWorks from "./pages/how-works/How_works";
import NotFound from "./pages/not-found/Not_Found";
import {Routes, Route} from "react-router-dom"
import Protected from "./component/protected";
import {UserContext} from "./component/context"

export default function App() {
  const [user, setUser] = useState(null)
  const value = useMemo(()=>({user,setUser}),[user,setUser]);
  return(
      <UserContext.Provider value={value}>
        <Routes>
          <Route path='*' element={<NotFound/>} />
          <Route path="/" element={<Home/>}></Route>
          <Route element={<Protected/>}>
            <Route path="/quiz" element={<Exam/>}/>
          </Route>
          <Route element={<Protected/>}>
            <Route path="/results" element={<Results/>}/>
          </Route>
          <Route path="/how-works" element={<HowWorks/>}/>
        </Routes>
      </UserContext.Provider>
  )
}