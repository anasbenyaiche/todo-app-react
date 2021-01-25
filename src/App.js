import React, { useEffect, useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import { taskList } from "./constants/profiles";

function App() {
  const [tasks, setTasks] = useState(taskList);
  const [task, setTask] = useState(null);
  const [updatedTasks, setUpdatedTasks] = useState(tasks);

  useEffect(() => {
    setTasks(updatedTasks);
  }, [updatedTasks]);
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    if (!!task) {
      const newTask = { id: tasks.length, title: task, isCompleted: false };
      setTasks([newTask, ...tasks]);
      setTask("");
    } else {
      alert("you must enter a task");
    }
  };
  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEdited: !task.isEdited } : task
      )
    );
  };

  const handleSave = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEdited: !task.isEdited } : task
      )
    );
  };
  console.log("updated", updatedTasks);
  return (
    <div className="App-header">
      <div className="task-form-container">
        <label>Hey, Do you have task</label>
        <div className="task-input-container">
          <input
            onChange={handleChange}
            value={task}
            className="form-control"
            placeholder="Entry your task"
          />
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-primary"
          >
            Add task
          </button>
        </div>
      </div>
      <ul className="task-list-container">
        {tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={() => handleComplete(task.id)}
            onDelete={() => handleDelete(task.id)}
            onEdit={() => handleEdit(task.id)}
            onSave={() => handleSave(task.id)}
            updatedValue={updatedTasks[index].title}
            setUpdatedValue={(event) =>
              setUpdatedTasks(
                updatedTasks.map((task, currentIndex) =>
                  currentIndex === index
                    ? { ...task, title: event.target.value }
                    : task
                )
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}
export default App;
