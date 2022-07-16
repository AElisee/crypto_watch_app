import React from "react";

const ToTop = () => {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 20)}>
      <img src="./assets/arrow-icon.svg" alt="arrow" />
    </div>
  );
};

export default ToTop;
