import React, { useState, useContext, useEffect } from "react";

import { Context } from "../../context/contex";
import "./Trade.css";

const Trade = () => {
  // const [optionMenu, setOptionMenu] = useState("bitcoin");
  const [amount, setAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [isBuy, setIsBuy] = useState(true);
  const [price, setPrice] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const context = useContext(Context);

  // const [messageSymbol, setMessageSymbol] = useState("btc");
  // const [listOpen, setListOpen] = useState(false)


  //function for limiting drop down menu
  // const currencyOptions = context.displayCurrency.filter(
  //   (prevCur) => prevCur.id !== context.coinName
  //   );

  // const handleChange = (event) => {
  //   setPrice(null);
  //   const coin = event.target.value;
  //   const currencyArray = context.displayCurrency;
  //   setMessageSymbol(currencyArray.filter((c) => c.id === coin)[0].symbol);
  //   setOptionMenu(coin);
  // };

  const handleAmount = (event) => {
    setPrice(null);
    setAmount(event.target.value);
  };

 

  const currencyExcengeSymb = context.listItemSymbol;
  const currencyExcengeName = context.coinName;

 
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

  const handleListOpen = () => {
    let open = context.listOpen;
    context.setListOpen(!open);
    setSelectedCurrency(null)
  };

  const handleListItem = (symbol, name) =>{
     context.setListItemSymbol(symbol);
     setSelectedCurrency(name)
      let open = context.listOpen;
      context.setListOpen(!open);

  }
   

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
        <div on onClick={handleListOpen}>
          {selectedCurrency || "Select Trade Currency"}
        </div>

        {context.listOpen && (
          <ul>
            {context.displayCurrency.map((cur) => (
              <li key={cur.id} onClick={(symbol, name) => handleListItem(cur.symbol, cur.name)}> {cur.name}</li>

              // <ListItem key={cur.id} symbol={cur.symbol}>
              //   {cur.name}
              // </ListItem>
            ))}
          </ul>
        )}
        {/* {context.listOpen
          ? context.displayCurrency.map((cur) => (

              <ListItem key={cur.id} symbol={cur.symbol}>
                {cur.name}
              </ListItem>


            ))
          : null} */}

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
                <span className="cur-cap">
                  {" "}
                  {context.listItemSymbol}
                </span> for {price}
                <span className="cur-cap"> {context.coinDetails.symbol}</span>
              </span>
            ) : (
              <span>
                You have sold {amount}
                <span className="cur-cap">
                  {" "}
                  {context.listItemSymbol}
                </span> for {price}
                <span className="cur-cap"> {context.coinDetails.symbol}</span>
              </span>
            )
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Trade;
