import { Item } from "../../config/mineralInterface";
import img from './../../../../assets/items/computer0000.png'

const komputer: Item = {
    nazwa: 'Komputer',
    potrzebneSurowce: [
        {
            typMineralu: 'Złom',
            cena: 80,
        },
        {
            typMineralu: 'Srebro',
            cena: 600
        },
        {
            typMineralu: 'Miedź',
            cena: 1500
        }
    ],
    boost: 20,
    img
}

export default komputer