import React, {useState} from 'react'
import {useHistory} from "react-router-dom";

const HEROKU_URL = "http://localhost:8080";//"http://slntpts-wbdv-sp21-thim-server.herokuapp.com";

const Register = () => {
    const[user, setUser] = useState({})
    const history = useHistory()
    const register = () => {

        console.log(user)

        //TODO: move this to a service file
        fetch(`${HEROKU_URL}/api/register`,{
            method: "POST",
            credentials: "include",
            body: JSON.stringify(user),
            headers: {
                'content-type': "application/json"
            }
        }).then(response => response.json())
            .catch(error => {
                console.log(error)
            })
            .then((actualUser) => {
                history.push("/../profile")
            })
    }
    return(
        <div>
            <h1>Register</h1>
            <input
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username" className="form-control"/>
            <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password" className="form-control"/>
            <input placeholder="password2" className="form-control"/>
            <select onChange={(e) => {
                const role = e.target.value
                setUser({...user, role: role})
            }}>
                <option value="ADMIN">ADMIN</option>
                <option value="FACULTY">FACULTY</option>
                <option value="STUDENT">STUDENT</option>
            </select>
            <button onClick={register}>
                Register
            </button>
        </div>
    )
}

export default Register




