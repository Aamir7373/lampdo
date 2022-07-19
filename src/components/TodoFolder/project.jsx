import React, { useState } from "react";
import Todo from "../Todo";

function Project() {
  const [inputData, setInputData] = useState("");
  const [inputItems, setItems] = useState([]);

  const addItems = () => {
    if (!inputData) {
      return "Add Some items Plz";
    } else {
      const lmdInputId = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...inputItems, lmdInputId]);
      setInputData("");
    }
  };

  const lmdDeleteItems = (index) => {
    const updateItems = inputItems.filter((curtElem) => {
      return curtElem.id !== index;
    });
    setItems(updateItems);
  };
  const lmdResetItems = () => {
    return setItems([]);
  };
  return (
    <>
      <div className="container-fluad bg-light navbar-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg mb-2">
            <h2>Lampdo</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <div className="form-group m-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add Task Here"
                      value={inputData}
                      onChange={(e) => setInputData(e.target.value)}
                    />
                  </div>
                </li>
                <li className="nav-item">
                  <button onClick={addItems} className="btn btn-primary m-2">
                    Add Task
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={lmdResetItems}
                    className="btn btn-primary m-2"
                  >
                    Reset All
                  </button>
                </li>
                <li className="nav-item m-2">
                  <button className="btn btn-danger">
                    <LmdTimeDate />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="lmdInputData">
          {inputItems.map((curtElem) => {
            return (
              <>
                <div className="row">
                  <div className="col-md-2">
                    <Todo />
                  </div>
                  <div className="col-md-4">
                    <div className="lmdItems" key={curtElem.id}>
                      <p className="form-control d-inline m-2">
                        {curtElem.name}
                      </p>
                      <button
                        className="btn btn-danger d-inline m-2"
                        onClick={() => lmdDeleteItems(curtElem.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

const LmdTimeDate = () => {
  const lmdDate = new Date().toLocaleDateString();
  const lmdToday = new Date();
  const curTime =
    lmdDate +
    "," +
    lmdToday.getDate() +
    lmdToday.getHours() +
    ":" +
    lmdToday.getMinutes() +
    ":" +
    lmdToday.getSeconds();

  return <>{curTime}</>;
};
export default Project;
