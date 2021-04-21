import logo from './logo.svg';
import './App.css';
import SearchScreen from "./components/home-screen";
import DetailsScreen from "./components/details-screen";
import HomeScreen from "./components/home-screen";
import {BrowserRouter, Route} from "react-router-dom";
import LoginScreen from "./components/login-screen";
import RegisterScreen from "./components/register-screen";

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
              <RegisterScreen/>
          </Route>
          <Route path={["/../login"]} exact={true}>
              <LoginScreen/>
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
