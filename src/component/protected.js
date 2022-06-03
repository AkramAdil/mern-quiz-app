import {Outlet, Navigate } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingBar from "./loadingBar";

function Child({isAuth}) {
    return (
        isAuth?<Outlet/>:<Navigate to="/"/>
    )
}

const Protected = function() {
    const [isAuth, setAuth] = useState()

    useEffect(()=>{
        axios({
            url:"https://arquiz.herokuapp.com/ensure",
            method: "GET",
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(data=>setAuth(data.data.isAuth))
    },[setAuth])
    console.log(isAuth)
    if(isAuth===undefined) {
        return <LoadingBar/>
    }
    return <Child isAuth={isAuth}/>
}
export default Protected