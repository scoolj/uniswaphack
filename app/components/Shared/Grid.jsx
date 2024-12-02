import React from "react";

const Grid = ({ children, cols }) => {
  return (
    <div className={`grid grid-cols-[${cols}] gap-10`}>{children}</div>
  );
};

export default Grid;
