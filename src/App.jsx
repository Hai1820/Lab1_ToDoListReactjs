import { useState, useEffect } from "react";
import ToDoList from "./components/TodoList/Index";
const TODO_APP_KEY_STORAGE = "TODO_APP";
function App() {
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    const toDoList = localStorage.getItem(TODO_APP_KEY_STORAGE);
    if (toDoList) {
      setToDoList(JSON.parse(toDoList));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(TODO_APP_KEY_STORAGE, JSON.stringify(toDoList));
  }, [toDoList]);
  function handleApp(value) {
    setToDoList([
      { id: Date.now + "-" + Math.random(), name: value },
      ...toDoList,
    ]);
  }
  const handleComplete = (task) => {
    task.isCompleted = true;
    setToDoList(...toDoList);
  };
  return (
    <div className="App">
      <ToDoList
        toDoList={toDoList}
        handleApp={handleApp}
        handleCompelete={handleComplete}
      />
    </div>
  );
}

export default App;
