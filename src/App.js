import React, { useContext } from "react";
import Favorites from "./conteiners/Favorites/Favorites";
import Table from "./conteiners/Table/Table";
import CurSection from "./conteiners/CurSection/CurSection";
import { Context } from "./context/contex";
import "./App.css";

const App = (props) => {
  const context = useContext(Context);

  let content = (
    <span className="select-coin">Select a coin to view more information</span>
  );
  
  if (context.isCoin) {
    content = <CurSection />;
  }

  return (
    <div className="app">
      <Favorites />
      <span className="all-coins">all coins</span>
      <Table />
      {content}
    </div>
  );
};

export default App;
