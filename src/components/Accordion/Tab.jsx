import React from "react";
export default function Accordion(props) {
  return (
    <div>
      <div className="title">{props.title}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}
