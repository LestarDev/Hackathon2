import { Item } from "../../config/mineralInterface";
import img from './../../../../assets/items/lamp0000.png'

const lampa: Item = {
    nazwa: 'Lampa',
    potrzebneSurowce: [
        {
            typMineralu: 'Miedź',
            cena: 40,
        },
        {
            typMineralu: 'Węgiel',
            cena: 20
        }
    ],
    boost: 5,
    img
}
export default lampa;