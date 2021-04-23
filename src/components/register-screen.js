import React, {useState} from 'react'
import {connect} from "react-redux";
import userService from '../services/user-service'
import {Link, useHistory} from "react-router-dom";

const RegisterScreen = (
    {
        register,
    }) => {
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [verifyPasswordValue, setVerifyPasswordValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");

    const history = useHistory()

    return (
        <>
            <div className="container">
                <h1>Sign Up</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control thim-field thim-username"
                                   id="username"
                                   placeholder="enter username"
                                   onChange={(e) => setUsernameValue(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="firstname" className="col-sm-2 col-form-label">
                            First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control thim-field thim-username"
                                   id="firstname"
                                   placeholder="First name"
                                   onChange={(e) => setFirstNameValue(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="lastname" className="col-sm-2 col-form-label">
                            Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control thim-field thim-username"
                                   id="lastname"
                                   placeholder="Last name"
                                   onChange={(e) => setLastNameValue(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input className="form-control thim-field thim-username"
                                   id="email"
                                   placeholder="Email"
                                   onChange={(e) => setEmailValue(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   id="inputPassword" placeholder="123qwe#$%"
                                   onChange={(e) => setPasswordValue(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputVerifyPassword" className="col-sm-2 col-form-label">
                            Verify Password
                        </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   className="form-control"
                                   id="inputVerifyPassword" placeholder="enter password"
                                   onChange={(e) => setVerifyPasswordValue(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <Link onClick={() => {
                                register(usernameValue, firstNameValue, lastNameValue, emailValue,  passwordValue, verifyPasswordValue, history)
                            }}className="btn btn-primary btn-block thim-login"
                               > Sign up
                            </Link>
                            {/*TODO: If successful redirect to home page with user token, otherwise stay in the register page*/}
                            <div className="row">
                                <div className="col-6">
                                    <Link to="/../login">Login</Link>
                                </div>
                                <div className="col-6">
                                    <a href="/" className="float-right">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

const stpm = (state) => {}

const dtpm = (dispatch) => ({
    register: (username, firstname, lastname, email, password, verifyPassword, history) => {

        if(password !== verifyPassword) {
            alert("PASSWORDS DO NOT MATCH!!")
        }
        else {
            userService.register({username: username, first: firstname, last: lastname, email: email, password: password, role: "NORMAL" }, history)
        }
    }
})

export default connect(stpm, dtpm) (RegisterScreen)




