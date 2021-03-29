import logo from './logo.svg';
import './App.css';
import SearchScreen from "./components/search-screen";
import DetailsScreen from "./components/details-screen";
import HomeScreen from "./components/home-screen";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
          <Route path="/" exact={true}>
              <HomeScreen/>
          </Route>
          <Route path={["/search", "/search/:text"]} exact={true}>
              <SearchScreen/>
          </Route>
          <Route path = "/details/:imageID" exact={true}>
              <DetailsScreen/>
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
