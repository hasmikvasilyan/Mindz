import React, { useState } from "react";
import { TextField } from "@material-ui/core/"
import './ResetPassword.css';
import Container from "../Shared/Container/Container";

export default function ResetPassword() {


    const [confirmPassword, setConfirmPassword] = useState("")
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const validatePassword = (password) => {
        return !(password.length < 8)
    }
    const valEqualPassword = (confirmPassword, password) => {
        return !(confirmPassword === password)
    }

    const handelLogin = (event) => {
        event.preventDefault()
        setPasswordError(!(validatePassword(password)))
        setConfirmPasswordError(valEqualPassword(confirmPassword, password))
    }
    return (
        <div className="myPage">
            <Container styleName="resetPasswordContainer">
                <div className="resetPasswordForm">

                    <form className="resetForm">
                        <h2 className="resetTitle">Reset Password</h2>
                        <h4 className="inputTitle">Password</h4>
                        <div className="inputPassword">

                            <TextField
                                error={passwordError}
                                type="password"
                                name="password"
                                placeholder={!passwordError ? " Enter your new password" : undefined}
                                label={!passwordError ? undefined : "Invalid Password"}
                                value={password}
                                variant="standard"
                                onChange={e => setPassword(e.target.value)}
                                fullWidth
                            />
                        </div>
                        <h4 className="inputTitle">Confirm Password</h4>
                        <div className="confirmpassword">
                            <TextField
                                error={confirmPasswordError}
                                type="password"
                                placeholder={!confirmPasswordError ? "Confirm your password" : undefined}
                                label={!confirmPasswordError ? undefined : "Wrong password"}
                                name="confirmPassword"
                                variant="standard"
                                value={confirmPassword}
                                onChange={event => setConfirmPassword(event.target.value)}
                                fullWidth
                            />
                        </div>

                        <button className="buttonSumbit" onClick={handelLogin}>Sumbit</button>
                    </form>

                </div>
            </Container >
        </div>
    )
}