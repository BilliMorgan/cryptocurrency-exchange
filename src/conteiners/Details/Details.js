import React, { useContext } from "react";
import { Context } from "../../context/contex";
import { ReactComponent as Bitcoin } from "../../assets/Bitcoin.svg";
import { ReactComponent as Plus } from "../../assets/plus-o-thick.svg";
import "./Details.css";

const Details = (props) => {
  const context = useContext(Context);
  const currencyArray = context.displayCurrency;
  const coin = context.coinId;
  const coinProperties = currencyArray.filter((c) => c.id === coin)[0];

  const addFavoriteHandler = (id) => {
    if (!context.favorite.includes(id)) {
      context.setFavorite((prevFav) => [...prevFav, id]);
    }
    //Add ending to the Market Cap Rank
    // const addEnding = (capRank) =>{
    //   if(+capRank === 1){
    //     return capRank + "ST"
    //   } else if (+capRank === 2){
    //     return capRank + "ND"
    //   } else if (+capRank === 3){
    //     return capRank + "RD"
    //   } else if (+capRank >= 4){
    //     return capRank + "TH"
    //   }
    // }
  };
  return (
    <div className="coin-det">
      <div className="coin-name-sec">
        <div className="ins">
          <Bitcoin className="ico-coin" />
        </div>

        {/* need to implement dynamic ico change */}
        <div className="coin-name">
          {coinProperties.name}(<span>{coinProperties.symbol}</span>)
        </div>
      </div>
      <div className="coin-prop-name">
        <div>
          Current Price:
          <span className="coin-span-prop">${coinProperties.currentPrice}</span>
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
          <span className="coin-span-prop">
            ${coinProperties.highTwentyFour}
          </span>
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
           
            {/* //need to add function addEnding() that add ending to this element */}
          </span>
        </div>
      </div>

      <div
        className="add-fav"
        onClick={(id) => addFavoriteHandler(coinProperties.id)}
      >
        <Plus className="ico-plus" />
        Add to favourites
      </div>
    </div>
  );
};

export default Details;