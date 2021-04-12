import React, {useState} from 'react'
import {connect} from "react-redux";
import userService from '../services/user-service'

const LoginScreen = (
    {
        findUser,
    }) => {
    const [usernameValue, setUsernameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    return (
        <>
            <div className="container">
                <h1>Login</h1>
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

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <a onClick={() => {
                                findUser(usernameValue, passwordValue)
                            }}className="btn btn-primary btn-block wbdv-login"
                               href="../home">Login</a>
                            <div className="row">
                                <div className="col-6">
                                    <a href="../register">Sign Up</a>
                                    {/*TODO: If successful redirect to home page with user token, otherwise stay in the register page*/}
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
    findUser: (username, password) => {
        userService.retrieveUser(username, password)
            .then(user => dispatch({
                type: "FIND_USER",
                user: user
            }))
    }
})

export default connect(stpm, dtpm) (LoginScreen)




