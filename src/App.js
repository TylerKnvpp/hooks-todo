import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { TaskContainer } from "./Containers/TaskContainer";
import { Form } from "./Components/Form";
import { CompletedContainer } from "./Containers/CompletedContainer";
import _ from "lodash";

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>TypeScript + Hooks ToDo App</h1>
      </div>
      <Form />
      <TaskContainer />
      <CompletedContainer />
    </div>
  );
};

export default App;
