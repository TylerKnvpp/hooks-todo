import React, { useState } from "react";

export const Form = props => {
  const [task, setTask] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (task) {
      props.handleSubmit(task);
      setTask("");
    } else {
      alert("Please fill out the field");
    }
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>Please enter a task below:</h3>
      <label>Task:</label>
      <br />
      <input className="field" onChange={e => setTask(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};
