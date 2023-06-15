import "./styles.css";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Eat", completed: true },
    { id: 2, name: "Sleep", completed: false },
    { id: 3, name: "Code", completed: true },
    { id: 4, name: "Repeat", completed: false },
  ]);
  const [newTasks, setNewTasks] = useState("");
  const [show, setShow] = useState(true);
  const handleAdd = () => {
    const newT = [
      ...tasks,
      { name: newTasks, id: tasks.length + 1, completed: false },
    ];
    setTasks(newT);
  };
  const handleChange = (event) => {
    setNewTasks(event.target.value);
  };
  return (
    <div className="App">
      <h1 className="heading">Todo-List</h1>
      <button class="toggle" onClick={() => setShow(!show)}>
        {show ? "Hide All" : "Show All"}
      </button>
      <ul className="List">
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "notcompleted"}
            >
              <span className="task id">{task.id}</span>{" "}
              <span className="task name">{task.name}</span>
              <span className="task button">
                <button name="checkbox" class="toggle">
                  {task.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
              </span>
            </li>
          ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add new task"
          name="new-task"
          id="ntask"
          required
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default App;
