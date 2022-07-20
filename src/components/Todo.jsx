import React, { useState } from "react";

const LmdCounter = () => {
  const [lmdCount, setCount] = useState(0);

  const LmdClasses = () => {
    let lmdClass = "btn m-2 text-white bg-";
    lmdClass += lmdCount === 0 ? "warning" : "primary";
    return lmdClass;
  };

  return (
    <>
      <span className={LmdClasses()}>Count {lmdCount}</span>
      <button
        className="btn btn-primary m-2"
        onClick={() => setCount(lmdCount + 1)}
      >
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setCount(lmdCount - 1)}
      >
        <i className="fa fa-minus" aria-hidden="true"></i>
      </button>
    </>
  );
};

export default LmdCounter;
