import React, { useState } from "react";

const LmdCounter = () => {
  const [lmdCount, setCount] = useState(5);
  
  return(
    <>
    <p>{lmdCount}
    <button className="btn btn-primary m-2" onClick={() => setCount(lmdCount + 1)}><i className="fa fa-plus" aria-hidden="true"></i></button>
    <button className="btn btn-secondary" onClick={() => setCount(lmdCount - 1)}><i className="fa fa-minus" aria-hidden="true"></i></button>
    </p>
    </>
  )
}

export default LmdCounter;