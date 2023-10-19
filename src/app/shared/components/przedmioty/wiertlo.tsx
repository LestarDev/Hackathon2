import { Item } from "../../config/mineralInterface";
import img from './../../../../assets/items/drill0000.png'

const wiertlo: Item = {
    nazwa: 'Wiertło',
    potrzebneSurowce: [
        {
            typMineralu: 'Żelazo',
            cena: 5000
        },
        {
            typMineralu: 'Srebro',
            cena: 1500,
        },
        {
            typMineralu: 'Stal',
            cena: 400
        }
    ],
    boost: 50,
    img
}

export default wiertlo;