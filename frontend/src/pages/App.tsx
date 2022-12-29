import React, { useEffect } from "react";

interface IApp {
  name: string
}

const App:React.FunctionComponent<IApp>  = (props) => {
  useEffect(() => {
      document.title = props.name
  }, [])
  return (
    <div className="App">
      {props.name}
    </div>
  );
}

export default App;
