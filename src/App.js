import logo from './logo.svg';
import './App.css';
import SearchScreen from "./components/home-screen";
import DetailsScreen from "./components/details-screen";
import HomeScreen from "./components/home-screen";
import {BrowserRouter, Route} from "react-router-dom";
import LoginScreen from "./components/login-screen";
import RegisterScreen from "./components/register-screen";
import Profile from "./components/users/profile";
import Register from "./components/users/register";
import Login from "./components/users/login";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
          {/*<Route path="/" exact={true}>*/}
          {/*    <HomeScreen/>*/}
          {/*</Route>*/}
          <Route path={["/", "/:text"]} exact={true}>
              <SearchScreen/>
          </Route>
          <Route path = "/details/:imageID" exact={true}>
              <DetailsScreen/>
          </Route>
          <Route path="/../register" exact={true}>
              {/*<RegisterScreen/>*/}
              <Register/>
          </Route>
          <Route path="/../profile" exact={true}>
              <Profile/>
          </Route>
          <Route path="/../profile/:userId" exact={true}>
              <Profile/>
          </Route>
          <Route path={["/../login"]} exact={true}>
              {/*<LoginScreen/>*/}
              <Login/>
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
