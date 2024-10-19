import React, { useState } from "react";

function Dailies() {
  const [tasks, setTasks] = useState([]); // List of tasks
  const [newTask, setNewTask] = useState(""); // New task input
  const [isEditing, setIsEditing] = useState(null); // Track which task is being edited
  const [editedTask, setEditedTask] = useState(""); // Value of the task being edited

  function inputChange(event) {
    setNewTask(event.target.value); // Update new task input value
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index) {
    setIsEditing(index); // Set the index of the task being edited
    setEditedTask(tasks[index]); // Pre-fill the input with the current task value
  }

  function handleEditChange(event) {
    setEditedTask(event.target.value); // Update the edited task value
  }

  function saveTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask; // Update the task with the new value
    setTasks(updatedTasks);
    setIsEditing(null); // Exit edit mode
  }

  return (
    <div className="body">
      <div className="main">
        <div className="back-color">
          <p className="dailies-text">Your Dailies...</p>
        </div>
      </div>
      <div className="input-div">
        <div className="back-color-input">
          <input
            className="input-elem"
            type="text"
            placeholder="What I Do Today..."
            value={newTask}
            onChange={inputChange}
          />
          <button className="submit-btn" onClick={addTask}>
            Submit
          </button>
        </div>
      </div>
      <div className="to-do-list-main">
        <div className="to-do-list">
          <ol>
            {tasks.map((task, index) => (
              <li key={index}>
                {isEditing === index ? (
                  <input
                    type="text"
                    value={editedTask}
                    onChange={handleEditChange}
                    className="edit-input"
                  />
                ) : (
                  <span className="tasks-manager">{task}</span>
                )}

                {isEditing === index ? (
                  <span className="save-btn" onClick={() => saveTask(index)}>
                    Save
                  </span>
                ) : (
                  <span className="delete-btn" onClick={() => editTask(index)}>
                    Edit
                  </span>
                )}

                <span className="delete-btn" onClick={() => deleteTask(index)}>
                  Delete
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Dailies;
