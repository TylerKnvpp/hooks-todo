import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { TaskContainer } from "./Containers/TaskContainer";
import { Form } from "./Components/Form";
import { CompletedContainer } from "./Containers/CompletedContainer";
import _ from "lodash";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(tasks => {
    fetch("http://localhost:3000/tasks")
      .then(resp => resp.json())
      .then(data => {
        setLoading(false);
        if (!tasks) {
          setTasks(data);
          const complete = data.filter(task => task.completed);
          const incomplete = data.filter(task => !task.completed);
          setCompletedTasks(complete);
          setIncompleteTasks(incomplete);
        }
      });
  }, []);

  const handleSubmit = task => {
    if (task) {
      const newTask = {
        task: task,
        completed: false
      };
      fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newTask)
      })
        .then(res => res.json())
        .then(res => {
          setTasks([...tasks, res]);
        })
        .catch(console.log);
    }
  };

  const handleClick = task => {
    const clone = _.clone(task);
    clone.completed = true;
    console.log(clone);
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(clone)
    })
      .then(res => res.json())
      .then(res => {
        const newIncomplete = incompleteTasks.filter(obj => obj.id !== task.id);
        setIncompleteTasks(newIncomplete);

        const newComplete = [...completedTasks, res];
        setCompletedTasks(newComplete);
      })
      .catch(console.log);
  };

  return (
    <div className="App">
      <div>
        <h1>TypeScript + Hooks ToDo App</h1>
      </div>
      <Form handleSubmit={handleSubmit} />
      <TaskContainer
        tasks={incompleteTasks}
        loading={loading}
        handleClick={handleClick}
      />
      <CompletedContainer tasks={completedTasks} />
    </div>
  );
};

export default App;
