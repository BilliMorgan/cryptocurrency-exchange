import React, { useState, useEffect } from "react";

export const Context = React.createContext({
  isCoin: false,
  onShowCoinSection: () => {},
  displayCurrency: [],
  coinName: "",
  setCoinName: "",
  favorite: "",
  setFavorite: "",
});

const ContextProvider = (props) => {
  const [showCoinSection, setShowCoinSection] = useState(false);
  const [currencyList, setCurrencyList] = useState([]);
  const [coinId, setCoinId] = useState("");
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const coinSectionHandler = () => {
    setShowCoinSection(true);
  };

  

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad")
      .then((response) => response.json())
      .then((data) => {
        const currencies = data.slice(0, 5);
        // console.log(currencies);
        const currencyArray = [];
        for (const currency of currencies) {
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
            marketCapRank: currency.market_cap_rank,
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
        favorite: favorite,
        setFavorite: setFavorite,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
