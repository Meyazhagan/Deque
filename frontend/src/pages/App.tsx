import Card from "../components/Card";
import React from "react";
import Dropdown from "../components/Dropdown";
import { ICONS } from "../Helper/Constant";

interface IApp {
  name: string
}


const App: React.FunctionComponent<IApp> = (props) => {

  return (
    <div className="app">
      <div className="left-panel">
        <div className="workspace">
          <div className="inner">
            <div className="logo">DeQue</div>
            <div className="workspace__items no-select">
              <div className="workspace__item pointer active">T</div>
              <div className="workspace__item pointer">OD</div>
              <div className="workspace__item pointer">DW</div>
              <div className="workspace__item pointer">EQ</div>
            </div>
          </div>
          <div className="workspace__add no-select pointer">+</div>
        </div>
        <div className="project">
          <div className="inner">
            <div className="search">
              <ICONS.SEARCH size={"1.3rem"} />
              <input type="text" placeholder="Search..." />
            </div>

            <Dropdown title="favorites" items={[
              {
                value: "Mirage", color: "yellow"
              }
            ]} />
            {/* <Dropdown title="favorites" items={[]} />
            <Dropdown title="favorites" items={[]} /> */}
          </div>
          <div className="project__add">+<span>New Project</span></div>
        </div>
      </div>
      <div className="main-panel">
        <div className="board">

          <div className="card__group">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        
        </div>
      </div>
      <div className="right-panel">
        {/* <div className="surface1"></div>
        <div className="surface2"></div>
        <div className="surface3"></div>
        <div className="surface4"></div>
        <div className="surface5"></div>
        <div className="text1">Lorem ipsum dolor sit amet.</div>
        <div className="text2">Lorem ipsum dolor sit amet.</div> */}
      </div>
    </div>
  );
}

export default App;
