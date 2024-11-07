import React from "react";
import "./App.css";
import data from "./assets/data";
import Helper from "./component/Helper";

const App = () => {
  return (
    <>
      <div className="header">
        <h1>React Display File Folder</h1>
      </div>
      <div className="wrapper">
        {data.length ? (
          <Helper data={data} />
        ) : (
          <p style={{ color: "white", textAlign: "center" }}>No Data found</p>
        )}
      </div>
    </>
  );
};

export default App;
