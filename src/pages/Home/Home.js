import React from "react"
import Navbar from "./../../component/navbar/navbar";
import Forms from "./form/forms"

import "./style.css";
export default function Home() {
  
    return(
      <>
            <Navbar></Navbar>
        
            <div className="welcome">
                <div className="aboutIt">
                    <h3>مرحبا بك في منصة امتحانات التعليم الأساسي</h3>
                    <p>هذه المنضة لطلاب التعليم الأساسي لتوفير طريقة سهلة وحديثة لإجراء الامتحانات باستخدام الأدوات التكنولوجية الحديثة  من المنزل </p>
                </div>
                <div className="forms">
                    <Forms></Forms>
                </div>
            </div>


        
        </>
    )
}