import React from "react"
import {Link} from "react-router-dom"
import "./nav_style.css"
export default function Navbar() {

  
    return(
        <>
            <nav className="home-nav">
                <ul>
                    <li><Link to="/">الرئيسية</Link></li>
                    <li><Link to="/how-works" target="_blank">كيف يعمل؟</Link></li>
                </ul>
            </nav>
        </>
    )
}