import React from "react";

import 'react-uikit-ward/dist/index.css';

import GivenDataTablePage from "./pages/GivenDataTablePage/GivenDataTablePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HolyGrailTemplate from "./components/templates/HolyGrail/HolyGrail";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps
} from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <HolyGrailTemplate>
          <Switch>
            <Route path="/" exact component={GivenDataTablePage}></Route>
            <Route path="/account/:mode" exact component={LoginPage}></Route>
          </Switch>
        </HolyGrailTemplate>
      </Router>
    </div>
  );
};

export default App;

