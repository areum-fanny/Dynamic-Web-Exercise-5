import React from "react";
import LoginForm from "../components/LoginForm";

function Login({LoginFunction}){
    return (
        <LoginForm LoginFunction={LoginFunction}/>
    );
}

export default Login;