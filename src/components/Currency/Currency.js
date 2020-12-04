import React, { useContext } from "react";
import { Context } from "../../context/contex";
import "./Currency.css";

const Currency = (props) => {
  const context = useContext(Context);

  const coinHandler = (id) => {
    context.setCoinName(id);
    context.onShowCoinSection();
  };

  return (
    <>
      {context.displayCurrency.map((cur) => (
        <div className="currency" key={cur.id}>
          <div className="row-cur"></div>
          <span className="name-cur" onClick={(id) => coinHandler(cur.id)}>
            {cur.name}
          </span>
          <span className="total-cur">{cur.totalSupply}</span>
          <span className="market-cap-cur">{cur.marketCap}</span>
          <span className="current-price-cur">${cur.currentPrice}</span>
        </div>
      ))}
    </>
  );
};

export default Currency;
