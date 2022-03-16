import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { useState } from "react";
export default function ToDoList({ toDoList, handleApp, handleCompelete }) {
  const [value, setValue] = useState();

  const _handleApp = () => {
    handleApp(value);
    setValue("");
  };
  const _onKeyUp = (ev) => {
    if (ev.key == "Enter") {
      handleApp();
    }
  };
  return (
    <div className={style.ToDoList}>
      <div className="input-group">
        <input
          onKeyUp={_onKeyUp}
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          type="text"
          placeholder="Nhập công việc cần làm..."
        />
        <button disabled={!value} onClick={_handleApp}>
          Thêm
        </button>
      </div>
      <h1 className="title">Dashboard</h1>
      <div className="card-list">
        <div className="card">
          <h2>Việc cần làm</h2>
          {toDoList
            .filter((e) => !e.isCompleted)
            .map((e) => (
              <ToDoItem
                key={e.id}
                {...e}
                handleCompelete={() => handleCompelete(e)}
              />
            ))}
        </div>
        <div className="card">
          <h2>Việc đã làm </h2>
          {toDoList
            .filter((e) => e.isCompleted)
            .map((e) => (
              <ToDoItem
                key={e.id}
                {...e}
                handleCompelete={() => handleCompelete(e)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
function ToDoItem({ name, isCompleted, handleCompelete }) {
  return (
    <div className={classNames("to-do-item", { isCompleted })}>
      <div className="name">{name}</div>
      <button onClick={(ev) => handleCompelete()}>✓</button>
    </div>
  );
}
