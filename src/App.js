import React from "react";
import Favorites from "./conteiners/Favorites/Favorites";
import Table from "./conteiners/Table/Table";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Favorites />
      <span className="all-coins">all coins</span>
      <Table />
      <span className="select-coin">
        Select a coin to view more information
      </span>
    </div>
  );
};

export default App;
