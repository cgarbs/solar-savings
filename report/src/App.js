import './App.css';
import React, { Component } from "react";
import Calculator from "./components/Calculator.js";
import Input from "./components/Input.js";

class App extends Component {

  render() {
    return (
      <div className="App">
       <div className="landing">
         <Input />
        {/* <Calculator /> */}

       </div>
      </div>
    );
  }
}

export default App;
