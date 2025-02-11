import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";

function Login(){

    let [isauthenticated,user]=useState(false);
    
    let username=useRef(null);
    let password=useRef(null);
    let dispatch=useDispatch();
    let navigate=useNavigate();

    let LoginCheck=()=>{
        if(username.current.value==="rahul"&&password.current.value==="rahul123"){
            dispatch(login(username.current.value))
            navigate("/home")
        }
        else{
            alert("Check your credintials once");
        }
    }
    return(
        <>
        <h1>Welcome to Login page</h1>
        <label>Username:</label>
        <input type="text" ref={username} /><p></p>
        <label>Password:</label>
        <input type="password" ref={password}/><p></p>
        <button onClick={LoginCheck}>Login</button>
        </>
    )

}
export default Login;