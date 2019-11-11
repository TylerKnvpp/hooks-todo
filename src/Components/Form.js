import React from "react";

export const Form = () => {
  return (
    <form className="form-card">
      <h3>Please enter a task below:</h3>
      <label>Task:</label>
      <br />
      <input className="field" />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};
