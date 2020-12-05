import React, { useContext } from "react";
import { Context } from "../../context/contex";
import "./ListItem.css";

const ListItem = (props) => {
  const context = useContext(Context);

  const handleListItem = (itemId) => {
    context.setListItemSymbol(itemId);
  };
  
  return (
    <div
      className="list-item"
      onClick={(itemId) => handleListItem(props.symbol)}
    >
      {props.children}
    </div>
  );
};

export default ListItem;
