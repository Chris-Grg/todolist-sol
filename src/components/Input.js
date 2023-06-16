import React from "react";
import { useRef } from "react";
const Input = ({ tasks, setTasks, editedTasks, setEditedTasks }) => {
  // const [newTasks, setNewTasks] = useState("");
  const newTaskRef = useRef("");
  const newStatusRef = useRef("");
  // const [newStatus, setNewStatus] = useState(false);
  const handleAdd = (event) => {
    event.preventDefault();
    if (editedTasks.id) {
      const date = new Date();
      const updatedTask = tasks.map((task) =>
        editedTasks.id === task.id
          ? {
              id: task.id,
              name: newTaskRef.current.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
              completed: newStatusRef.current.value,
            }
          : task
      );
      setTasks(updatedTask);
      setEditedTasks({});
    } else {
      const date = new Date();
      const newT = [
        ...tasks,
        {
          name: newTaskRef.current.value,
          id: tasks.length + 1,
          completed: newStatusRef.current.value,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        },
      ];
      setTasks(newT);
    }
  };
  // const handleChange = (event) => {
  //   setNewTasks(event.target.value);
  // };
  const handleReset = () => {
    newTaskRef.current.value = "";
    newStatusRef.current.value = "";
    setEditedTasks({ id: "", name: "", completed: "" });
  };
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Add new task"
        name="new-task"
        id="ntask"
        required
        autoComplete="off"
        minLength="3"
        value={editedTasks.name || ""}
        onChange={(event) =>
          setEditedTasks({ ...editedTasks, name: event.target.value })
        }
        ref={newTaskRef}
      />
      <select name="dropdown" ref={newStatusRef} required autoComplete="off">
        <option value="">Select One</option>
        <option value={true}>Completed</option>
        <option value={false}>Incomplete</option>
      </select>
      <button type="submit">{editedTasks.id ? "Update" : "Add"}</button>

      <button onClick={handleReset}>Reset</button>
    </form>
  );
};

export default Input;
