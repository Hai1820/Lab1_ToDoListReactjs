import React, { createContext, useContext, useState } from "react";

export default function CourseAccordion({
  index,
  title,
  content,
  position,
  onClick,
}) {
  const { numOpen } = useContext(Context);
  return (
    <div className="accordion" onClick={onClick}>
      <div className="accordion__title">
        <div className="date">Ngày {index}</div>
        <h3>{title}</h3>
      </div>
      <div
        className="content"
        style={{ display: position === numOpen ? "block" : "none" }}
      >
        {content}
      </div>
    </div>
  );
}
const Context = createContext({ numOpen: -1 });
CourseAccordion.Group = ({ children }) => {
  const [numOpen, setNumOpen] = useState(-1);
  const onClick = (index) => () => {
    setNumOpen(index);
  };
  return (
    <Context.Provider value={{ numOpen: -1 }}>
      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child, { position: i, onClick: onClick(i) });
      })}
    </Context.Provider>
  );
};
