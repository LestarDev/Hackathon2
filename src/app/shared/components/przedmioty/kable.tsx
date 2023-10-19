import { Item } from "../../config/mineralInterface";
import img from './../../../../assets/items/cable0000.png'

const kable: Item = {
    nazwa: 'Kable',
    potrzebneSurowce: [
        {
            typMineralu: 'Miedź',
            cena: 20
        },
        {
            typMineralu: 'Węgiel',
            cena: 10
        },
        {
            typMineralu: 'Żelazo',
            cena: 10
        }
    ],
    boost: 20,
    img
}

export default kable