import React from "react";
import Currency from "../../components/Currency/Currency"
import "./Table.css"

const Table = () => {
  
  return (
    <div className="table">
      <div className="title-row">
        <span className="name">name</span>
        <span className="total">total supply</span>
        <span className="market-cap">market cap</span>
        <span className="current-price">current price</span>
      </div>


      <Currency />
      <Currency />
      <Currency />
      <Currency />
      <Currency />
    </div>
  );
};

export default Table;