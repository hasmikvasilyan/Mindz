import React, { useState, useEffect } from "react";
import validator from "validator";
import { TextField } from "@material-ui/core/";
import "./ForgotPassword.css";

export default function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState(false)
    useEffect(() => {
        setErrorEmail(validator.isEmail(email))
    }, [email])

    const handelSumbit = (event) => {
        event.preventDefault()
        setErrorEmail(!validator.isEmail(email))
    }
    return (<>

        <div className="ForgotPassworContainer">

            <div className="ForgotPasswordForm">

                <form className="ForgotPassword">
                    <h2>Forgot Password</h2>

                    <h4>Email</h4>
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
                    <button className="buttonSumbit" onClick={handelSumbit}>Sumbit</button>
                </form>

            </div>
        </div >
    </>
    )
}


