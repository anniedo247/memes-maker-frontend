import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
const App = () => {
  return (
    <div className="text-center">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
