import React, { useContext } from "react";
import "./CurSection.css";
import { Context } from "../../context/contex";
import {ReactComponent as Bitcoin} from "../../assets/Bitcoin.svg";
import {ReactComponent as Plus} from "../../assets/plus-o-thick.svg";
// import {} from "../../assets"

const CurSection = () => {
  const context = useContext(Context);
  const currencyArray = context.displayCurrency;
  const coin = context.coinName;
  const displayCoin = currencyArray.filter((c) => c.id === coin);


  return (
    <section>
      Currency Section
      <div className="coin-det">
        <div className="coin-name-div">
          <Bitcoin className="ico-coin"/>
          {/* need to implement dynamic ico change */}
          <span className="coin-name">
            {displayCoin[0].name}(<span>{displayCoin[0].symbol}</span>)
          </span>
        </div>
        <div className="coin-prop-name">
          <div>
            Current Price:
            <span className="coin-span-prop">
              ${displayCoin[0].currentPrice}
            </span>
          </div>
          <div>
            Market Cap:
            <span className="coin-span-prop">{displayCoin[0].marketCap}</span>
          </div>
          <div>
            Low 24h:
            <span className="coin-span-prop">
              ${displayCoin[0].lowTwentyFour}
            </span>
          </div>
          <div>
            High 24h:
            <span className="coin-span-prop"></span>
          </div>
          <div>
            Circulating Supply:
            <span className="coin-span-prop">
              {displayCoin[0].circulatingSupply}
            </span>
          </div>
          <div>
            Total Supply:
            <span className="coin-span-prop">{displayCoin[0].totalSupply}</span>
          </div>
          <div>
            Market Cap Rank:
            <span className="coin-span-prop">
              {displayCoin[0].marketCapRank}
              {/* //need to addfunction that add ending to this element */}
            </span>
          </div>
        </div>

        <div className="add-fav">
          <Plus className="ico-plus"/>
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
