import React from "react";

const List = ({
  edit,
  show,
  tasks,
  setEdit,
  setTasks,
  setEditedTasks,
  editedTasks,
}) => {
  ///EDIT///

  const handleEdit = (id) => {
    setEditedTasks(tasks.find((task) => task.id === id));
  };

  ////DELETE
  const handleDelete = (id) => {
    console.log(id);
    console.log(tasks.filter((task) => task.id !== id));

    setTasks(tasks.filter((task) => task.id !== id));
    ////Completed
  };
  const handleCompletedToggle = (id) => {
    const newCompleted = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    // console.log(newCompleted);

    setTasks(newCompleted);
  };
  return (
    <div>
      <ul className="List">
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "notcompleted"}
            >
              <span className="task id">{task.id}</span>{" "}
              <span className="task name">
                <p className="name-time">
                  <span className="lname">{task.name}</span>
                  <span className="ltime">{task.time}</span>
                </p>
              </span>
              <span className="task button">
                <button
                  name="checkbox"
                  className={task.completed ? "incomplete-btn" : "complete-btn"}
                  onClick={() => handleCompletedToggle(task.id)}
                >
                  {task.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
                {
                  <button
                    onClick={() => handleEdit(task.id)}
                    name="checkbox"
                    className="edit"
                  >
                    Edit
                  </button>
                }
                <button
                  onClick={() => handleDelete(task.id)}
                  name="checkbox"
                  className="delete"
                >
                  Delete
                </button>
              </span>
              {/* <ListButtons task={task} /> */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
