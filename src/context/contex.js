import React, { useState, useEffect } from "react";

export const Context = React.createContext({
  isCoin: false,
  onShowCoinSection: () => {},
  displayCurrency: [],
  coinId: "",
  setCoinId: "",
  favorite: "",
  setFavorite: "",
  listOpen: false,
  setListOpen: "",
  listItemSymbol: "",
  setListItemSymbol: "",
  coinName: "",
  setCoinName: "",
  coinDetails: {},
  setCoinDetails: ""
})

const ContextProvider = (props) => {
  const [showCoinSection, setShowCoinSection] = useState(false);
  const [currencyList, setCurrencyList] = useState([]);
  const [coinId, setCoinId] = useState("");
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
   const [listOpen, setListOpen] = useState(false);
   const [listItemSymbol, setListItemSymbol] = useState("");
   const [coinName, setCoinName] = useState("");
   const [coinDetails, setCoinDetails] = useState({});
   
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
        coinId: coinId,
        setCoinId: setCoinId,
        favorite: favorite,
        setFavorite: setFavorite,
        listOpen: listOpen,
        setListOpen: setListOpen,
        listItemSymbol: listItemSymbol,
        setListItemSymbol: setListItemSymbol,
        coinName: coinName,
        setCoinName: setCoinName,
        coinDetails: coinDetails,
        setCoinDetails: setCoinDetails,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
