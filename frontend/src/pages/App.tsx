import classNames from "classnames";
import React, { useState } from "react";
import Card from "../components/Card";

interface IApp {
  name: string
}


const App: React.FunctionComponent<IApp> = (props) => {

  return (
    <div className="app">
      <div className="card__group">
        <Card />
        <Card />
        {/* 
        <Card />
        <Card /> */}
      </div>
      <div className="card__group">
        <Card />
        <Card />
        <Card />
        {/* <Card /> */}
      </div>
      <div className="card__group">
        <Card />
        <Card />
        {/* <Card />
        <Card /> */}
      </div>
      <div className="card__group">
        <Card />
        <Card />
        <Card />
        {/* <Card /> */}
      </div>
    </div>
    );
  }

  export default App;
  