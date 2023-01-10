import classNames from "classnames";
import React, { useState } from "react";
import Card from "../components/Card";

interface IApp {
  name: string
}


const App: React.FunctionComponent<IApp> = (props) => {

  return (
    <div className="app">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    );
  }

  export default App;
  