import React, { useState, useEffect } from "react";
import validator from "validator";
import { TextField } from "@material-ui/core/"
import './SignIn.css';
import { Link } from "react-router-dom"
//import Header from "../Shared/Header/Header";

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    useEffect(() => {
        setErrorEmail(validator.isEmail(email))
    }, [email])
    const handelLogin = (event) => {
        event.preventDefault()
        setErrorEmail(!validator.isEmail(email))
        setPasswordError(validator.isEmpty(password))
    }
    return (
        <>
            <div className="signinContainer">
                <div className="info">
                    <h1>Sign in to</h1>
                    <p>mindz in simply</p>
                    <p>If you don't have an account register</p>
                    <p>You can <Link to={"/register"}> Register here!</Link></p>
                </div>
                <div className="signInForm">
                    <form className="signForm">
                        <h2>Sign In</h2>
                        <div className="inputEmailUser">
                            <TextField
                                error={errorEmail}
                                type="email"
                                name="email"
                                placeholder={!(errorEmail) ? "Enter your email" : undefined}
                                label={!(errorEmail) ? undefined : "Your Email is invalid"}
                                variant="standard"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                fullWidth
                            />
                        </div>
                        <div className="inputPassword">
                            <TextField
                                error={passwordError}
                                type="password"
                                name="password"
                                placeholder={!passwordError ? " Enter your password" : undefined}
                                label={!passwordError ? undefined : "Write your password"}
                                value={password}
                                variant="standard"
                                onChange={e => setPassword(e.target.value)}
                                fullWidth
                            />
                        </div>
                        <Link to={"/login/forgot_password"} className="link">Forgot password!</Link>

                        <button className="buttonSignIn" onClick={handelLogin}>Login</button>
                    </form>
                </div>
            </div >
        </>
    )
}