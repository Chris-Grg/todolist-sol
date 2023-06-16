import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import "./styles.css";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Eat", completed: true, time: `7:00:28 AM 5/16/2023` },
    { id: 2, name: "Sleep", completed: false, time: `11:30:00 PM 5/16/2023` },
    { id: 3, name: "Code", completed: true, time: `5:36:28 PM 6/16/2023` },
    { id: 4, name: "Repeat", completed: false, time: `7:00:28 PM 6/16/2023` },
  ]);
  const [editedTasks, setEditedTasks] = useState("");

  const [show, setShow] = useState(true);
  const [edit, setEdit] = useState(false);

  return (
    <div className="App">
      <Header show={show} setShow={setShow} />
      <div className="Listdiv">
        <List
          show={show}
          tasks={tasks}
          edit={edit}
          setEdit={setEdit}
          setTasks={setTasks}
          setEditedTasks={setEditedTasks}
          editedTasks={editedTasks}
        />
      </div>
      <div className="Input">
        <Input
          tasks={tasks}
          setTasks={setTasks}
          editedTasks={editedTasks}
          setEditedTasks={setEditedTasks}
        />
      </div>
    </div>
  );
};

export default App;
