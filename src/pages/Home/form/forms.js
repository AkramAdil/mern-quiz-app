import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import  axios from "axios";
import Login from "./loginForm/login";
import Register from "./registerForm/register"
import "./form_style.css"
//import {UserContext} from "../../component/context"
export default function Forms() {
    const [formType, setFormType] = useState("login")
    const [loginValues, setLoginValues] = useState({
        seatNum:"",
        password:""
    })
    ///
    const [registerValues, setRegisterValues] = useState({
        name:"",
        email:"",
        seatNum: "",
        password:""
    })
    const [errors,setErrors] = useState(null)
    const [success,setSuccess] = useState(null)
    const [loading,setLoading] = useState(false)

    //const {user, setUser} = useContext(UserContext)
    const history = useNavigate()
    function whitchForm() {
        setSuccess(null)
        setErrors(null)
        if(formType==="login"){
            setFormType("register")
        } else if (formType==="register") {
            setFormType("login")
        }
    }
    async function login(e){
        setLoading(true)
        e.preventDefault()
        // eslint-disable-next-line
        const response = await axios(
            {
                method: 'POST',
                url: "https://ar-quiz.onrender.comlogin",
                data: {
                    seatNum:loginValues.seatNum,
                    password:loginValues.password,
                },
            }
        ).then(response=>{
            if(response.data.errMsg) {
                setSuccess(null)
                setErrors(response.data.errMsg)
                setLoading(false)
            }else {
                history("/quiz")
                localStorage.setItem("token", response.data.token)
                //console.log(response.data)
                //setUser(response.data)
            }
        }).catch(err=>console.log(err))
    }
    async function register(e){
        setLoading(true)
        e.preventDefault()
        // eslint-disable-next-line
        const response = await axios(
            {
                method: 'POST',
                url: "https://ar-quiz.onrender.comregister",
                data: {
                    name:registerValues.name, 
                    email:registerValues.email, 
                    seatNum:registerValues.seatNum, 
                    password:registerValues.password
                }
            }
        ).then(response=>{
            if(response.data.errMsg) {
                setErrors(response.data.errMsg)
                setLoading(false)
            } else{
                setSuccess(response.data.succMsg)
                setErrors(null)
                setFormType('login')
                setLoading(false)
            }
        })
    }
    
    /////////////////
    function handleLoginValues(e) {
        const {name, value}= e.target
        setLoginValues({...loginValues, [name]:value})
    }

    /////////////////
    function handleRegisterValues (e) {
        const {name, value}= e.target
        setRegisterValues({...registerValues, [name]: value})
    }
    switch (formType) {
        case "login":
            return(
                <Login whitchForm={whitchForm} 
                success={success}
                errors={errors} 
                login={login}
                formValues={loginValues}
                handelValues={handleLoginValues}
                loading={loading}
                />
            )

        case "register":
            return(
                <Register whitchForm={whitchForm}
                errors={errors}
                register={register}
                formValues={registerValues}
                handelValues={handleRegisterValues}
                loading={loading}
                />
            )
        default:
            return "not"

    }
}