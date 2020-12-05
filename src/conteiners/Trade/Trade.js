import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../context/contex";
import "./Trade.css";

const Trade = () => {
  const [optionMenu, setOptionMenu] = useState("bitcoin");
  const [amount, setAmount] = useState("");
  const context = useContext(Context);
  const [exchangeRate, setExchangeRate] = useState("");
  const [isBuy, setIsBuy] = useState(true);
  const [price, setPrice] = useState(null);
  const [messageSymbol, setMessageSymbol] = useState("btc");

  //function for limiting drop down menu
  // const currencyOptions = context.displayCurrency.filter(
  //   (prevCur) => prevCur.id !== context.coinName
  //   );



  const handleChange = (event) => {
    setPrice(null);

    const coin = event.target.value;
    const currencyArray = context.displayCurrency;
    setMessageSymbol(currencyArray.filter((c) => c.id === coin)[0].symbol);

    setOptionMenu(coin);
  };

  const handleAmount = (event) => {
    setPrice(null);
    setAmount(event.target.value);
  };

  const currencySymbol = context.displayCurrency.filter(
    (currency) => currency.id === context.coinName
  )[0].symbol;

  const currencyExcengeSymb = currencySymbol.toString();
  const currencyExcengeName = optionMenu.toString();



  const extractRate = (rate) => {
    for (let obj in rate) {
      let innerRate = rate[obj];
      for (let innerObj in innerRate) {
        return setExchangeRate(innerRate[innerObj]);
      }
    }
  };
//fetching currency exchenge rate
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=" +
        currencyExcengeName +
        "&vs_currencies=" +
        currencyExcengeSymb
    )
      .then((response) => response.json())
      .then((data) => {
        extractRate(data);
        setPrice(null);
      })
      .catch((error) => console.log(error));
  }, [currencyExcengeName, currencyExcengeSymb]);

  const isBuyHandler = () => {
    setPrice(null);
    setIsBuy(true);
  };
  const isSellHandler = () => {
    setPrice(null);
    setIsBuy(false);
  };

  const onSubmitHandler = (event) => {
    if (isBuy === true) {
      setPrice(+amount * exchangeRate);
      event.preventDefault();

    } else {
      setPrice(+amount * exchangeRate);
      event.preventDefault();

    }
  };


  return (
    <div className="trade">
      <div className="buy-sell-buttons">
        <button
          className={isBuy ? "active-but" : "not-active-but"}
          onClick={isBuyHandler}
        >
          BUY
        </button>
        <button
          className={isBuy ? "not-active-but" : "active-but"}
          onClick={isSellHandler}
        >
          SELL
        </button>
      </div>

      <form className="trade-form" onSubmit={onSubmitHandler}>
        <div className="drop-coin">
          <select value={optionMenu} onChange={handleChange} >
            {context.displayCurrency.map((cur) => (
              <option value={cur.id} key={cur.id}>
                {cur.name}
              </option>
            ))}
          </select>
        </div>

        <div className="line"></div>
        <div className="amount">
          <input
            className="amount-inp"
            type="number"
            value={amount}
            onChange={handleAmount}
            placeholder="Amount"
          ></input>
        </div>

        <div className="line"></div>
        <input type="submit" value="Submit" className="submit" />
        <div className="sub-message">
          {price ? (
            isBuy ? (
              <span>
                You have purchased {amount}
                <span className="cur-cap"> {messageSymbol}</span> for {price}
                <span className="cur-cap"> {currencyExcengeSymb}</span>
              </span>
            ) : (
              <span>
                You have sold {amount}
                <span className="cur-cap">{messageSymbol}</span> for {price}
                <span className="cur-cap"> {currencyExcengeSymb}</span>
              </span>
            )
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Trade;
