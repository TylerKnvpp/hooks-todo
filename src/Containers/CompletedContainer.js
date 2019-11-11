import React from "react";
import Task from "../Components/Task";

export const CompletedContainer = props => {
  const renderTasks = props.tasks.map(taskObj => {
    return <Task key={taskObj.id} task={taskObj} />;
  });

  return (
    <div className="task-card">
      <h3>Completed:</h3>
      {props.loading ? <h2>loading..</h2> : renderTasks}
    </div>
  );
};
