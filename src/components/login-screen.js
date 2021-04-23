import React, {useState} from 'react'
import {connect} from "react-redux";
import userService from '../services/user-service'
import {Link, useHistory} from "react-router-dom";

const LoginScreen = (
    {
        login,
    }) => {

    const history = useHistory()
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
                            <input className="form-control thim-field thim-username"
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
                            <Link onClick={() => {
                                login(usernameValue, passwordValue, history)
                            }}className="btn btn-primary btn-block thim-login">Login</Link>
                            <div className="row">
                                <div className="col-6">
                                    <Link to="/../register">Sign Up</Link>
                                    {/*TODO: If successful redirect to home page with user token, otherwise stay in the register page*/}
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
    login: (username, password, history) => {
        userService.login({username: username, password: password}, history)
    }
})

export default connect(stpm, dtpm) (LoginScreen)




