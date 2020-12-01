import React from "react";
import "./Currency.css";


const Currency = (props)=> {
  // console.log(props)
  return (
    <div className="currency">
      <span className="name-cur">{props.children.name}</span>
      <span className="total-cur">{props.children.totalSupply}</span>
      <span className="market-cap-cur">{props.children.marketCap}</span>
      <span className="current-price-cur">${props.children.currentPrice}</span>
      <div className="row-cur"></div>
    </div>
  );
} 

export default Currency;