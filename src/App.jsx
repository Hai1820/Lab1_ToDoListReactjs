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

  /*
   * Nên đặt tên function có ý nghĩa thực thi 
   * => handleAdd: (tốt)
   * => handleApp: (không tốt)
   */
  function handleApp(value) {
    setToDoList([
      { id: Date.now + "-" + Math.random(), name: value },
      ...toDoList,
    ]);
  }
  const handleComplete = (task) => {
    task.isCompleted = true;
    /*
     * Lỗi: khi muốn dùng spread syntax(...) để clone một array phải có [], vd: [...toDoList]
     */
    // setToDoList(...toDoList);

    /*
     * Chỉnh sửa
     */
    setToDoList([...toDoList]);
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
