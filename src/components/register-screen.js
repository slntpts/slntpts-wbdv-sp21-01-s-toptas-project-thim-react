import React, {useState} from 'react'
import {connect} from "react-redux";
import userService from '../services/user-service'

const RegisterScreen = (
    {
        createUser,
    }) => {
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [verifyPasswordValue, setVerifyPasswordValue] = useState("");//TODO: use to check if password and ver password are same
    return (
        <>
            <div className="container">
                <h1>Sign Up</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="username"
                                   placeholder="enter username"
                                   onChange={(e) => setUsernameValue(e.target.value)}>
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
                            <a onClick={() => {
                                createUser(usernameValue, passwordValue, verifyPasswordValue)
                            }}className="btn btn-primary btn-block wbdv-login"
                               href="../login">Sign up</a>
                            {/*TODO: If successful redirect to home page with user token, otherwise stay in the register page*/}
                            <div className="row">
                                <div className="col-6">
                                    <a href="../login">Login</a>
                                </div>
                                <div className="col-6">
                                    <a href="../index.html" className="float-right">Cancel</a>
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
    createUser: (username, password, verifyPassword) => {

        if(password != verifyPassword) {
            alert("PASSWORDS DO NOT MATCH!!")
        }
        else {

            userService.createUser({username: username, password: password})
                .then(user => dispatch({
                    type: "CREATE_USER",
                    user: user
                }))
        }
    }
})

export default connect(stpm, dtpm) (RegisterScreen)




