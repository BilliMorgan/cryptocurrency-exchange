import React, { useState, useEffect } from "react";

export const Context = React.createContext({
  isCoin: false,
  onShowCoinSection: () => {},
  displayCurrency: [],
  coinName: "",
  setCoinName: "",

  

});

const ContextProvider = (props) => {
  const [showCoinSection, setShowCoinSection] = useState(false);

  const coinSectionHandler = () => {
    setShowCoinSection(true);
  };

  const [currencyList, setCurrencyList] = useState([]);
  const [coinId, setCoinId] = useState("")

  // console.log(coinId)

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad")
      .then((response) => response.json())
      .then((data) => {
        const currencies = data.slice(0, 5);
        console.log(currencies);
        const currencyArray = [];
        for (const currency of currencies) {
          // console.log(currency)
          currencyArray.push({
            id: currency.id,
            name: currency.name,
            symbol: currency.symbol,
            totalSupply: currency.total_supply,
            marketCap: currency.market_cap,
            currentPrice: currency.current_price,
            lowTwentyFour: currency.low_24h,
            highTwentyFour: currency.high_24h,
            circulatingSupply: currency.circulating_supply,
            marketCapRank: currency.market_cap_rank
          });
        }
        setCurrencyList(currencyArray);
      });
  }, [setCurrencyList]);

  return (
    <Context.Provider
      value={{
        onShowCoinSection: coinSectionHandler,
        isCoin: showCoinSection,
        displayCurrency: currencyList,
        coinName: coinId,
        setCoinName: setCoinId,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
