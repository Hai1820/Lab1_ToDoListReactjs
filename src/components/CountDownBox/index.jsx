import { useState, useEffect } from "react";

export function CountDownBox(props) {
  const [count, setCount] = useState(10);
  const _onClick = () => {
    setCount(count + 1);
  };
  const onDown = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    console.log("abc");
  }, []);
  return (
    <div
      style={{
        width: 200,
        height: 200,
        background: props.color,
        fontSize: 50,
        color: "white",
        display: "grid",
        justifyContent: "center",
      }}
    >
      {count}
      <button onClick={() => setCount + 1}>Up</button>
      <button onClick={onDown}>Down</button>
    </div>
  );
}
export default CountDownBox;
