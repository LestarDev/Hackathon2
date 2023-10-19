import { Item } from "../../config/mineralInterface";
import img from './../../../../assets/items/computer0000.png'

const komputer: Item = {
    nazwa: 'Komputer',
    potrzebneSurowce: [
        {
            typMineralu: 'Złom',
            cena: 10,
        },
        {
            typMineralu: 'Srebro',
            cena: 20
        },
        {
            typMineralu: 'Miedź',
            cena: 20
        }
    ],
    boost: 20,
    img
}

export default komputer