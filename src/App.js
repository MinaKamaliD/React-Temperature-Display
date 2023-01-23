import "./App.css";
import React from "react";
import { Component } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay/TemperatureDisplay";

class App extends Component {
  render() {
    return (
      <div>
        <TemperatureDisplay></TemperatureDisplay>
      </div>
    );
  }
}

export default App;
