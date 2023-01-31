import Card from "../Components/Card";
import React from "react";
import Dropdown from "../Components/Dropdown";
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

            <Dropdown title="favorites" items={[]} />
            <Dropdown title="All Projects" items={[]} />
            {/* <Dropdown title="favorites" items={[]} />
            <Dropdown title="favorites" items={[]} /> */}
          </div>
          <div className="project__add">+<span>New Project</span></div>
        </div>
      </div>
      <div className="main-panel">
        <div className="inner">
          <div className="project__info">
            <div className="project__section">
              <div className="title"><ICONS.SQUARE /> Unique</div>
              <div className="tags">
                <div className="tag"><ICONS.SQUARE /> Website</div>
                <div className="tag"><ICONS.SQUARE /> App</div>
                <div className="tag"><ICONS.SQUARE /> Dribble Shot</div>
              </div>
            </div>
            <div className="action">
              <div className="search"><ICONS.SEARCH /></div>
              <div className="add__to__favorite"><ICONS.STAR /></div>
              <div className="action"><ICONS.ACTION /></div>
            </div>
          </div>

          <div className="secondary__info">
            <div className="tabs">
              <div className="tab">Discussion <span className="notification" >3</span> </div>
              <div className="tab active">Tasks</div>
              <div className="tab">Timeline</div>
              <div className="tab">Files</div>
              <div className="tab">Overview</div>
            </div>
            <div className="members">
            <img className="avatar" src="https://i.pravatar.cc/450" alt="" />
            <img className="avatar" src="https://i.pravatar.cc/450" alt="" />
            <img className="avatar" src="https://i.pravatar.cc/450" alt="" />
              <div className="avatar avatar--count">+34</div>
              <div className="member__add">+</div>
            </div>
          </div>

        </div>
          <div className="view__info">
            <div className="views">
              <div className="view active"><ICONS.KANBAN /> Kanban </div>
              <div className="view"><ICONS.TABLE /> Table </div>
              <div className="view"><ICONS.LIST /> List </div>
            </div>
            <div className="view active"><ICONS.FILTER/> Filter</div>
          </div>
        <div className="board">

          <div className="card__group">
            <div className="group__title dot dot--grey">New Request</div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <div className="add__card">+</div>
          </div>
          <div className="card__group">
            <div className="group__title dot dot--blue">In Progress</div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <div className="add__card">+</div>
          </div>
          <div className="card__group">
            <div className="group__title dot dot--green">Completed</div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <div className="add__card">+</div>
          </div>
          <div className="card__group">
            <div className="group__title dot dot--orange">Verified</div>
            <Card />
            <Card />
            <Card />
            <Card />
            <div className="add__card">+</div>
          </div>
          <div className="card__group">
            {/* <div className="group__title dot red-dot">New Request</div> */}
            <div className="add__card">+</div>
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
