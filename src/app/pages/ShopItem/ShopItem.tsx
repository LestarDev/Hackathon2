import './ShopItem.css';
const ShopItem = ({item}: any) => {
    return (
        <div className="shopItem">
            <img src="" alt="" />
            <p>{item.nazwa}</p>
            <button>Kup</button>
        </div>
    )
}

export default ShopItem