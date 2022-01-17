import { extend } from 'jquery';
import './App.css';
import React from 'react'
//import Estruc from './component/estruc';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isColorSelect: " "
    };
  }

  render() {
    let red2 = " ";
    let yellow2 = " ";
    let green2 = " ";

    if (this.state.isColorSelect == "red")
      red2 = "gloss";
    if (this.state.isColorSelect == "yellow")
      yellow2 = "gloss";
    if (this.state.isColorSelect == "green")
      green2 = "gloss";

    return (
      <body>
        <div className="contenedor">
          <div onClick={() => this.setState({ isColorSelect: "red" })} className={"red " + red2} ></div>
          <div onClick={() => this.setState({ isColorSelect: "yellow" })} className={"yellow " + yellow2} ></div>
          <div onClick={() => this.setState({ isColorSelect: "green" })} className={"green " + green2} ></div>
        </div>
      </body>
    )
  }
};


export default App;
/**/