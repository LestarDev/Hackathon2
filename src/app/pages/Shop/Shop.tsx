import ShopItem from '../ShopItem/ShopItem';
import './Shop.css'
import allItems from '../../shared/components/przedmioty/allItems';

const Shop = ({isOpen}: {isOpen: boolean}) => {
    const itemsElements = allItems.map(item => {
        return (
            <ShopItem item={item}></ShopItem>
        )
    })

    return (
        <div className={`${isOpen ? 'shop' : 'shopClosed'}`}>
            {itemsElements}
        </div>
    )
}

export default Shop;