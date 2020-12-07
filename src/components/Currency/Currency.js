import React, { useContext } from "react";
import { Context } from "../../context/contex";
import "./Currency.css";

const Currency = (props) => {
  const context = useContext(Context);

  const coinHandler = (id, name, coinDet) => {
    context.setCoinId(id);
    context.setCoinName(name)
    context.setCoinDetails(coinDet)
    context.setIsBuy(null)
    context.setSelectedCurrency(null)
    context.setPrice(null)
    context.setAmount("")
    context.onShowCoinSection();

  };

  return (
    <>
      {context.displayCurrency.map((cur) => (
        <div className="currency" key={cur.id}>
          <div className="row-cur"></div>
          <span className="name-cur" onClick={(id, name, coinDet) => coinHandler(cur.id, cur.name, cur)}>
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
