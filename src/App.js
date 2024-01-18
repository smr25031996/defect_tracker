import React from "react";
import "./App.css";
import LogIn from "./LogIn";
import AddDefect from "./Add_Defect";

function App() {
  return (
    <React.Fragment>
      <h1>Defect Tracker</h1>
      {/* <LogIn /> */}
      <AddDefect />
    </React.Fragment>
  );
}

export default App;
