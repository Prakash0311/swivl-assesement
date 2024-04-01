
import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import Home from "./Home";

function SignIn(){
    const [value,setValue] = useState('')

    onClickSubmit = event => {
        event.preventDefault()
    }
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })


return (
    <div>
        {value ? <Home />:
    <div className="container">
        <div className="card-1">
            <h1>Board<span>.</span></h1>
        </div>
        <div className="login-container">
            <h1 className="sign-in-text">Sign In</h1>
            <p>Sign in to your account</p>
            <div className="button-group">
                <button onClick={handleClick} className="sign-in-btn">
                    <img src="https://res.cloudinary.com/dnfojolxx/image/upload/v1711952536/google-icon_1_hhnukl.png" />
                    Sign in with Google
                </button>
                <button onClick={handleClick} className="sign-in-btn">
                    <img src="https://res.cloudinary.com/dnfojolxx/image/upload/v1711952492/apple_1_pwkqkx.png" />
                    Sign in with Apple
                </button>
            </div>
            <form className="form-container" onSubmit={onClickSubmit}>
                <div className="input-group">
                    <label for="email" className="label">Email Address</label>
                    <input type="email" name="email" id="email" value="johndeo@gmail.com" className="text-1"/>
                </div>
                <div className="input-group">
                    <label for="password" className="label">Password</label>
                    <input type="password" name="password" id="password" value="asdfghjkl" className="text-1"/>
                </div>
                <p className="forgot-txt">Forgot Password?</p>
                <button type="button" className="btn-signin">Sign In</button>
            </form>
            <p className="register">
                Don't have an account ?
                <span className="span-txt">Register here</span>
            </p>
        </div>
    </div>
}
    </div>
);
}
export default SignIn;
