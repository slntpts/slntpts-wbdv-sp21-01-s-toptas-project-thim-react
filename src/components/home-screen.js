import React from 'react'
import {Link} from "react-router-dom"
import RegisterScreen from "./register-screen";
import LoginScreen from "./login-screen";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import userReducer from "../reducers/user-reducer";
import imageReducer from "../reducers/image-reducer";


const reducer = combineReducers({
    //combine all reducer in one single reducer, as map-value pairs. We will determine which one we are gonna use.
    //and once we do that we provide reducer as a top reducer to the createStore.
    imageReducer: imageReducer,
    userReducer: userReducer
})

const store = createStore(reducer)//we grab the store from module reducer.
//STEP2- and store goes to the <ModuleList/> below

const HomeScreen = () => {
    return (

        <Provider store={store}>

            <div>
                <h2>Home Screen</h2>
                <Link to="/search">
                    Search
                </Link>
                <br/>
                <Link to="/details">
                    Details
                </Link>
            </div>

            <div className="row">
                <div className="col-3">
                    <RegisterScreen/>
                </div>
                <div className="col-9">
                    <LoginScreen/>
                </div>
            </div>

            <br/>
        </Provider>
    )
}

export default HomeScreen