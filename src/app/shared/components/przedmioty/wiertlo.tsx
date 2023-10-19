import { Item } from "../../config/mineralInterface";
import img from './../../../../assets/items/drill0000.png'

const wiertlo: Item = {
    nazwa: 'Wiertło',
    potrzebneSurowce: [
        {
            typMineralu: 'Żelazo',
            cena: 10
        },
        {
            typMineralu: 'Srebro',
            cena: 10,
        },
        {
            typMineralu: 'Stal',
            cena: 10
        }
    ],
    boost: 50,
    img
}

export default wiertlo;