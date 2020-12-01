import React from "react";
import "./Currency.css";


const Currency = ()=> {
  return (
    <div className="currency">
      <span className="name-cur">Bitcoin</span>
      <span className="total-cur">total supply</span>
      <span className="market-cap-cur">market cap</span>
      <span className="current-price-cur">current price</span>
      <div className="row-cur"></div>
    
    </div>
  );
} 

export default Currency;