import React, { useState } from "react";
import validator from "validator";
import "./SignUp.css"
import { TextField } from "@material-ui/core/"
import { Link } from "react-router-dom"
import Container from "../Shared/Container/Container";

export default function SignUp({ sumbitForm }) {

    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [userNameError, setUserNameError] = useState(false)
    const [numberError, setNumberError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)



    const validatePassword = (password) => {
        return !(password.length < 8)
    }
    const valEqualPassword = (confirmPassword, password) => {
        return !(confirmPassword === password)
    }
    const validatePhoneNumber = (number) => {
        let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        return re.test(number);
    }

    const handelOnSumbit = (event) => {
        event.preventDefault()
        setEmailError(!validator.isEmail(email))
        setUserNameError(validator.isEmpty(userName))
        setNumberError(!validatePhoneNumber(number))
        setPasswordError(!(validatePassword(password)))
        setConfirmPasswordError(valEqualPassword(confirmPassword, password))
    }

    return (
        <div className="myPage">
            <Container styleName="signUpContainer">
                <div className="info">
                    <h1 className="pageTitle">Sign Up to</h1>
                    <p className="paragraf">
                        <p className="mindzInfo"> Mindz is simple</p><br />
                        If you already have an account <br />
                        You can < Link to={'/login'} className="loginLink">Login here !</Link> </p>
                </div>
                <div className="signUpForm">
                    <h2 className="title">Sign Up</h2>
                    <form className="form_signUp" >
                        < div className="enterEmail">
                            <TextField
                                error={emailError}
                                type="email"
                                name="email"
                                placeholder={!(emailError) ? "Enter your email" : undefined}
                                label={!(emailError) ? undefined : "Your Email is invalid"}
                                variant="standard"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                fullWidth
                            />


                        </div>
                        <div className="userName">
                            <TextField
                                error={userNameError}
                                type="text"
                                name="userName"
                                placeholder={!(userNameError) ? "Create User name" : undefined}
                                label={!(userNameError) ? undefined : "Write your username"}
                                variant="standard"
                                value={userName}
                                onChange={event => setUserName(event.target.value)}
                                fullWidth
                            />


                        </div>
                        <div className="number">
                            <TextField
                                error={numberError}
                                type="text"
                                placeholder={!(numberError) ? "Contact number" : undefined}
                                label={!numberError ? undefined : "Write your phone number"}
                                name="number"
                                value={number}
                                variant="standard"
                                onChange={event => setNumber(event.target.value)}
                                fullWidth
                            />

                        </div>
                        <div className="password">
                            <TextField
                                error={passwordError}
                                type="password"
                                placeholder={!passwordError ? "Password" : undefined}
                                label={!passwordError ? undefined : "Incorrect password."}
                                name="password"
                                value={password}
                                variant="standard"
                                onChange={event => setPassword(event.target.value)}
                                fullWidth
                            />
                        </div>

                        <div className="confpassword">
                            <TextField
                                error={confirmPasswordError}
                                type="password"
                                placeholder={!confirmPasswordError ? "Confirm password" : undefined}
                                label={!confirmPasswordError ? undefined : "Wrong password"}
                                name="confirmPassword"
                                variant="standard"
                                value={confirmPassword}
                                onChange={event => setConfirmPassword(event.target.value)}
                                fullWidth
                            />
                        </div>

                        <button className="signUpBtn" onClick={handelOnSumbit}>Register</button>
                    </form>
                </div>
            </Container>
        </div >

    )


}
