import React, { useContext } from "react";
import { Context } from "../../context/contex";
import Button from "../../components/Button/Button";
import { ReactComponent as Bitcoin } from "../../assets/Bitcoin.svg";
import { ReactComponent as Xrp } from "../../assets/xrp.svg";
import { ReactComponent as Litecoin } from "../../assets/Litecoin-new.svg";
import { ReactComponent as Ethereum } from "../../assets/ethereum.svg";
import { ReactComponent as Tron } from "../../assets/tron.svg";
import "./Favorites.css";

const Favorites = () => {
  const context = useContext(Context);
  const favoriteCoins = context.favorite;
  const allCoins = context.displayCurrency;
  const favoriteAllCoins = allCoins.filter((coin) =>
    favoriteCoins.includes(coin.id)
  );

  let showFavoriteButtons = (
    <div className="no-fav">No Favourite Coins Added</div>
  );

  if (context.favorite.length > 0) {
    showFavoriteButtons = (
      <div className="favorite-but">
        {favoriteAllCoins.map((favCoin) => (
          <Button key={favCoin.id} favId={favCoin.id}>

            <label className="ins-top">
              {favCoin.id === "bitcoin" ? (
                <Bitcoin className="ico-top" viewbox="0 0 12 17" />
              ) : favCoin.id === "ethereum" ? (
                <Ethereum className="ico-top" viewbox="0 0 12 17" />
              ) : favCoin.id === "ripple" ? (
                <Xrp className="ico-top" viewbox="0 0 12 17" />
              ) : favCoin.id === "litecoin" ? (
                <Litecoin className="ico-top" viewbox="0 0 12 17" />
              ) : favCoin.id === "tether" ? (
                <Tron className="ico-top" viewbox="0 0 12 17" />
              ) : null}
            </label>

            <label className="big-screen">{favCoin.name}</label>
            <label className="small-screen">{favCoin.symbol}</label>
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className="fav-div">
      <div className="favorite-coins">Favorite Coins</div>
      {showFavoriteButtons}
    </div>
  );
};

export default Favorites;
