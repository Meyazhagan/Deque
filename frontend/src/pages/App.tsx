import React from "react";

interface IApp {
  name: string
}

let workspaces = [
  "T",
  "Iv",
  "Lu",
  "Ws"
]

const App: React.FunctionComponent<IApp> = (props) => {
  return (
    <div className="app">
      <div className="side-bar">
        <div className="side-bar__workspace">
          <div className="deque-logo"></div>
          {
            workspaces.map(workspace => <div className="workspace">
              {workspace}
            </div> )
          }
          <div className="add-workspace">
            
          </div>
        </div>
        <div className="side-bar__project">
        </div>
      </div>
      <div className="main-bar"></div>
      <div className="right-bar"></div>
    </div>
    );
  }

  export default App;
  
  // <div className="App">
  //   <div className="top-bar">
  //     {/* <div className="top-bar__logout"></div> */}
  //   </div>
  //   <div className="left-side-bar">
  //     <div className="left-side-bar__workspace">
  //       {/* <div className="left-side-bar__logo">
  //         Dq
  //       </div> */}
  //     </div>
  //     <div className="left-side-bar__project"></div>
  //   </div>
  //   <div className="main">
  //     <div className="main__task">
  //       <div className="main__task--kanban"></div>
  //       <div className="main__task--table"></div>
  //       <div className="main__task--list"></div>
  //     </div>
  //   </div>
  //   <div className="right-side-bar">
  //     <div className="right-side-bar__profile"></div>
  //     <div className="right-side-bar__chat"></div>
  //   </div>
  // </div>