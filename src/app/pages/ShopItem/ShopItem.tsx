import './ShopItem.css';
const ShopItem = ({item}: any) => {
    return (
        <div className="shopItem">
            <div className="shopItemImgContainer">
                          <div className="shopItemImgWrapper">
            <img className="shopItemImg" src={item.img} alt={item.nazwa} />

            </div>  
            </div>

            <p>{item.nazwa}</p>
            <button>Kup</button>
        </div>
    )
}

export default ShopItem