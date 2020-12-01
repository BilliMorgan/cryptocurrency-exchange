import React, { useState, useEffect } from "react";
import Currency from "../../components/Currency/Currency";
import "./Table.css";

const Table = (props) => {
  // const {onCurrencyList} = props
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad")
      .then((response) => response.json())
      .then((data) => {
        const currencies = data.slice(0, 5);
        console.log(currencies);
        const currencyArray = [];
        for (const currency of currencies) {
          currencyArray.push({
            id: currency.id,
            name: currency.name,
            totalSupply: currency.total_supply,
            marketCap: currency.market_cap,
            currentPrice: currency.current_price,
          });
        }
        setCurrencyList(currencyArray);
      });
  }, [setCurrencyList]);
  console.log(currencyList[1]);
  return (
    <div className="table">
      <div className="title-row">
        <span className="name">name</span>
        <span className="total">total supply</span>
        <span className="market-cap">market cap</span>
        <span className="current-price">current price</span>
      </div>
      {currencyList.map((cur) => (
        <Currency key={cur.id}>{cur}</Currency>
      ))}
    </div>
  );
};

export default Table;
