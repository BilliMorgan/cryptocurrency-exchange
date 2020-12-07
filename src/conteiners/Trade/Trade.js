import React, { useContext } from "react";

import { Context } from "../../context/contex";
import "./Trade.css";

const Trade = () => {
  // const [amount, setAmount] = useState("");
  // const [exchangeRate, setExchangeRate] = useState("");
  // const [isBuy, setIsBuy] = useState(null);
  // const [price, setPrice] = useState(null);
  // const [selectedCurrency, setSelectedCurrency] = useState(null);

  const context = useContext(Context);

  // function for limiting drop down menu
  const currencyOptions = context.displayCurrency.filter(
    (prevCur) => prevCur.id !== context.coinId
  );

  const handleAmount = (event) => {
    context.setPrice(null);
    context.setAmount(event.target.value);
  };

  const isBuyHandler = () => {
    context.setPrice(null);
    context.setIsBuy("buy");
  };
  const isSellHandler = () => {
    context.setPrice(null);
    context.setIsBuy("sell");
  };

  const onSubmitHandler = (event) => {
    if (context.isBuy === "buy") {
      context.setPrice(+context.amount * context.exchangeRate);
      event.preventDefault();
    } else if (context.isBuy === "sell") {
      context.setPrice(+context.amount * context.exchangeRate);
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  };

  const handleListOpen = () => {
    let open = context.listOpen;
    context.setListOpen(!open);
    context.setSelectedCurrency(null);
  };

  const handleListItem = (symbol, name) => {
    context.setListItemSymbol(symbol);
    context.setSelectedCurrency(name);
    let open = context.listOpen;
    context.setListOpen(!open);
  };

  return (
    <div className="trade">
      <div className="buy-sell-buttons">
        <button
          className={
            context.isBuy
              ? context.isBuy === "buy"
                ? "active-but"
                : "not-active-but"
              : "not-active-but"
          }
          onClick={isBuyHandler}
        >
          BUY
        </button>
        <button
          className={
            context.isBuy
              ? context.isBuy === "sell"
                ? "active-but"
                : "not-active-but"
              : "not-active-but"
          }
          onClick={isSellHandler}
        >
          SELL
        </button>
      </div>

      <form className="trade-form" onSubmit={onSubmitHandler}>
        <div on onClick={handleListOpen}>
          {context.selectedCurrency || "Select Trade Currency"}
        </div>

        {context.listOpen && (
          <ul>
            {currencyOptions.map((cur) => (
              <li
                key={cur.id}
                onClick={(symbol, name) => handleListItem(cur.symbol, cur.name)}
              >
                {" "}
                {cur.name}
              </li>
            ))}
          </ul>
        )}

        <div className="line"></div>
        <div className="amount">
          <input
            className="amount-inp"
            type="number"
            value={context.amount}
            onChange={handleAmount}
            placeholder="Amount"
          ></input>
        </div>
        <div className="line"></div>
        <input type="submit" value="Submit" className="submit" />
        <div className="sub-message">
          {context.price
            ? (context.isBuy && context.isBuy === "buy" && (
                <span>
                  You have purchased {context.amount}
                  <span className="cur-cap">
                    {" "}
                    {context.listItemSymbol}
                  </span> for {context.price}
                  <span className="cur-cap"> {context.coinDetails.symbol}</span>
                </span>
              )) ||
              (context.isBuy && context.isBuy === "sell" && (
                <span>
                  You have sold {context.amount}
                  <span className="cur-cap">
                    {" "}
                    {context.listItemSymbol}
                  </span> for {context.price}
                  <span className="cur-cap"> {context.coinDetails.symbol}</span>
                </span>
              ))
            : null}
        </div>
      </form>
    </div>
  );
};

export default Trade;
