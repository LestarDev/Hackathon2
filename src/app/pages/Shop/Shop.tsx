import './Shop.css'

const Shop = ({isOpen}: {isOpen: boolean}) => {
    return (
        <div className={`${isOpen ? 'shop' : 'shopClosed'}`}>
            
        </div>
    )
}

export default Shop;