import {Outlet, Navigate } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

function Child({isAuth}) {
    return (
        isAuth?<Outlet/>:<Navigate to="/"/>
    )
}

const Protected = function() {
    const [isAuth, setAuth] = useState()

    useEffect(()=>{
        axios({
            url:"http://localhost:9090/ensure",
            method: "GET",
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        })
        .then(data=>setAuth(data.data.isAuth))
    },[setAuth])
    console.log(isAuth)
    if(isAuth===undefined) {
        return <>still loading...</>
    }
    return <Child isAuth={isAuth}/>
}
export default Protected