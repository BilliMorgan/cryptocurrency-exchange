import React, { useContext } from "react";
import "./CurSection.css";
import { Context } from "../../context/contex";
import { ReactComponent as Bitcoin } from "../../assets/Bitcoin.svg";
import { ReactComponent as Plus } from "../../assets/plus-o-thick.svg";
// import {} from "../../assets"

const CurSection = () => {
  const context = useContext(Context);
  const currencyArray = context.displayCurrency;
  const coin = context.coinName;
  const displayCoin = currencyArray.filter((c) => c.id === coin);
  const coinProperties = displayCoin[0]




  const addFavoriteHandler = (name) => {
    //const contextFavorite = context.Favorite;
    context.setFavorite(prevFav => [...prevFav, name])
  };

  return (
    <section>
      Currency Section
      <div className="coin-det">
        <div className="coin-name-div">
          <Bitcoin className="ico-coin" />
          {/* need to implement dynamic ico change */}
          <span className="coin-name">
            {coinProperties.name}(<span>{coinProperties.symbol}</span>)
          </span>
        </div>
        <div className="coin-prop-name">
          <div>
            Current Price:
            <span className="coin-span-prop">
              ${coinProperties.currentPrice}
            </span>
          </div>
          <div>
            Market Cap:
            <span className="coin-span-prop">{coinProperties.marketCap}</span>
          </div>
          <div>
            Low 24h:
            <span className="coin-span-prop">
              ${coinProperties.lowTwentyFour}
            </span>
          </div>
          <div>
            High 24h:
            <span className="coin-span-prop"></span>
          </div>
          <div>
            Circulating Supply:
            <span className="coin-span-prop">
              {coinProperties.circulatingSupply}
            </span>
          </div>
          <div>
            Total Supply:
            <span className="coin-span-prop">{coinProperties.totalSupply}</span>
          </div>
          <div>
            Market Cap Rank:
            <span className="coin-span-prop">
              {coinProperties.marketCapRank}
              {/* //need to add function that add ending to this element */}
            </span>
          </div>
        </div>

        <div
          className="add-fav"
          onClick={(name) => addFavoriteHandler(coinProperties.name)}
        >
          <Plus className="ico-plus" />
          Add to favourites
        </div>
      </div>
      <div className="coin-trade">
        <button>BUY</button> <button>SELL</button>
      </div>
    </section>
  );
};
export default CurSection;
