import React from 'react';
import {Link } from "react-router-dom";
import "./logout_sytle.css"
const Logout = () => {
    const logOut = function () {
        localStorage.removeItem("token")
    }
    return (
        <Link to="/" className="logout" onClick={logOut}>تسجيل الخروج</Link>
    );
};

export default Logout;