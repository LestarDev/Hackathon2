import { Item } from "../../config/mineralInterface";
import img from './../../../../assets/items/lamp0000.png'

const lampa: Item = {
    nazwa: 'Lampa',
    potrzebneSurowce: [
        {
            typMineralu: 'Miedź',
            cena: 30,
        },
        {
            typMineralu: 'Węgiel',
            cena: 20
        }
    ],
    boost: 30,
    img
}
export default lampa;