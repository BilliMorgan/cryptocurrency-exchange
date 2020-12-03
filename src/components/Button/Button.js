import React, { useState, useContext } from "react";
import { Context } from "../../context/contex";
import "./Button.css";

const Button = (props) => {
  const context = useContext(Context);

  const [onHover, setOnHover] = useState(false);
  const hoverHandler = () => {
    setOnHover(true);
  };
  const hoverHandlerTwo = () => {
    setOnHover(false);
  };

  const removeFavoriteHandler = (favId) => {
    console.log(favId);
    context.setFavorite((prevFav) =>
      prevFav.filter((favorite) => favorite !== favId)
    );
  };

  return (
    <button
      className={onHover ? "rem-button" : "fav-button"}
      onMouseOver={hoverHandler}
      onMouseOut={hoverHandlerTwo}
      onClick={(favId) => removeFavoriteHandler(props.favId)}
    >
      {onHover ? "REMOVE" : props.children}
    </button>
  );
};

export default Button;
