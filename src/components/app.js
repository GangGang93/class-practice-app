import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Axios from "axios";


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Class '20 DevCamp App with:</h1>
        <h2>React + Redux</h2>

        <div style={{ color: "red" }}>
          Warning: this is the experimental template, pardon the bugs
        </div>
      </div>
    );
  }
}
