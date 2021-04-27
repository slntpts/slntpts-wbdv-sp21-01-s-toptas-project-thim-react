import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const HEROKU_URL = "https://slntpts-wbdv-sp21-thim-server.herokuapp.com";//"http://localhost:8080";

const Login = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState({})
    const login = () => {
        fetch(`${HEROKU_URL}/api/login`, {
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(existingUser => {
                if(existingUser) {
                    history.push("/../profile")
                }
            })
    }
    return(
        <div>
            <h1>Login</h1>
            <input
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                placeholder="username" className="form-control"/>
            <input
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                placeholder="password" className="form-control"/>
            <button onClick={login}>
                Login
            </button>
        </div>
    );
}

export default Login