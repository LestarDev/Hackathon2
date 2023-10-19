import { useRef } from 'react';
import usePlayer from '../../hook/usePlayer';
import { Item } from '../../shared/config/mineralInterface';
import './ShopItem.css';
const ShopItem = ({item}: any) => {

    const refButtonBuy = useRef<HTMLButtonElement>(null);

    const player = usePlayer();

    const butPowerUp = (i: Item) => {
        if(player.haveEnoughToBoyItem(i)){
            // player.addBoost(i.boost);
            for(let j=0; j<i.potrzebneSurowce.length; j++){
                player.addMineral(player.getNrFromName(i.potrzebneSurowce[j].typMineralu), i.potrzebneSurowce[j].cena);
            }
        }
    }

    return (
        <div className="shopItem">
            <div className="shopItemImgContainer">
                          <div className="shopItemImgWrapper">
            <img className="shopItemImg" src={item.img} alt={item.nazwa} />

            </div>  
            </div>

            <p>{item.nazwa}</p>
            <button ref={refButtonBuy} onClick={butPowerUp(item)}>Kup</button>
        </div>
    )
}

export default ShopItem