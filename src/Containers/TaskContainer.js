import React from "react";
import Task from "../Components/Task";

export const TaskContainer = props => {
  const renderTasks = props.tasks.map(taskObj => {
    return (
      <Task key={taskObj.id} task={taskObj} handleClick={props.handleClick} />
    );
  });

  return (
    <div className="task-card">
      <h3>Tasks:</h3>
      {props.loading ? <h2>loading..</h2> : renderTasks}
    </div>
  );
};
