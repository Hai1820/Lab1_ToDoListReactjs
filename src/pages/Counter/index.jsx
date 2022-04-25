import React from "react";
import { useDispatch, useSelector } from "react-redux";

const style = {
  fontSize: 50,
};
export default function Counter() {
  console.log("re-render");
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: 100, marginBottom: 100 }}>
      <button
        style={style}
        onClick={() => dispatch({ type: "counter/decrement" })}
      >
        -
      </button>
      Counter:{value}
      <button
        style={style}
        onClick={() => dispatch({ type: "counter/increment" })}
      >
        +
      </button>
    </div>
  );
}
