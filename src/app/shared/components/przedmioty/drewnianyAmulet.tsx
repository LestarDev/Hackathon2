import { Item } from "../../config/mineralInterface";
import img from './../../../../assets/items/wood0000.png'

const drewnianyAmulet: Item = {
    nazwa: 'Drewniany amulet',
    potrzebneSurowce: [
        {
            typMineralu: 'Drewno',
            cena: 200
        }
    ],
    boost: 2
}

export default drewnianyAmulet