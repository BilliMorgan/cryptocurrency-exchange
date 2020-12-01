import React from "react";
import "./Currency.css";


const Currency = (props)=> {
  // console.log(props)
  return (
    <>
    {props.currency.map(cur =>(
    <div className="currency" key={cur.id}>
      <span className="name-cur">{cur.name}</span>
      <span className="total-cur">{cur.totalSupply}</span>
      <span className="market-cap-cur">{cur.marketCap}</span>
      <span className="current-price-cur">${cur.currentPrice}</span>
      <div className="row-cur"></div>
    </div>
    ))}
    </>
  );
} 

export default Currency;