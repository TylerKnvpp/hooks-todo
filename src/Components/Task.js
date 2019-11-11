import React from "react";

const Task = props => {
  const handleCompleted = e => {
    e.preventDefault();
    props.handleClick(props.task);
  };

  return (
    <div className="task">
      <div className="inline-task">
        {!props.task.completed ? (
          <button className="button" onClick={handleCompleted} />
        ) : null}
        <h4>{props.task.task}</h4>
      </div>
    </div>
  );
};

export default Task;
