import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from "redux";
import imageReducer from "./reducers/image-reducer";
import postReducer from "./reducers/post-reducer";
import userReducer from "./reducers/user-reducer";


const reducer = combineReducers({
    //combine all reducer in one single reducer, as map-value pairs. We will determine which one we are gonna use.
    //and once we do that we provide reducer as a top reducer to the createStore.
    imageReducer: imageReducer,
    userReducer: userReducer,
    postReducer: postReducer
})

const store = createStore(reducer)//we grab the store from image reducer.

render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
