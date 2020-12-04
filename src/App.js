import React, { useContext } from "react";
import Favorites from "./conteiners/Favorites/Favorites";
import Table from "./conteiners/Table/Table";
import CurSection from "./conteiners/CurSection/CurSection";
import { Context } from "./context/contex";
import "./App.css";

const App = (props) => {
  const context = useContext(Context);

  let content = (
    <div className="select-coin">Select a coin to view more information</div>
  );
  if (context.isCoin) {
    content = <CurSection />;
  }

  return (
    <div className="app">
      <Favorites />
      <div className="all-coins">all coins</div>
      <Table />
      {content}
    </div>
  );
};

export default App;
