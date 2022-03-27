import React, { useState, } from "react";
import validator from "validator";
import { TextField } from "@material-ui/core/"
import './SignIn.css';
import { Link } from "react-router-dom"
import Container from "../Shared/Container/Container";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { auth } from "../../Firebase"


export default function SignIn() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/profil")

        } catch (err) {
            alert(err.massage)
        }

    }

    const handelLogin = (event) => {
        event.preventDefault()
        setErrorEmail(!validator.isEmail(email))
        setPasswordError(validator.isEmpty(password))
        login()
    }

    return (
        <div className="myPage">
            <Container styleName="signInContainer">

                <div className="info">
                    < h1 className="pageTitle"> Sign in to</h1 >
                    <p className="paragraf">
                        <p className="mindzInfo"> Mindz in simply</p><br />
                        If you don't have an account register<br />
                        You can <Link to={"/register"} className="registerLink"> Register here!</Link></p>
                </div >
                <div className="signInForm">
                    <form className="signForm">
                        <h2 className="title">Sign In</h2>

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

            </Container >
        </div >
    )

}







