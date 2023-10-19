import { Item } from "../../config/mineralInterface";
import img from './../../../../assets/items/cable0000.png'

const kable: Item = {
    nazwa: 'Kable',
    potrzebneSurowce: [
        {
            typMineralu: 'Miedź',
            cena: 1500
        },
        {
            typMineralu: 'Węgiel',
            cena: 200
        },
        {
            typMineralu: 'Żelazo',
            cena: 500
        }
    ],
    boost: 20,
    img
}

export default kable