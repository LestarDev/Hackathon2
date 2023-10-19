import { Item } from "../../config/mineralInterface";
import img from './../../../../assets/items/wooden_totem0000.png'

const drewnianaFigurka: Item = {
    nazwa: 'Drewniana figurka',
    potrzebneSurowce: [
        {
            typMineralu: 'Drewno',
            cena: 25
        }
    ],
    boost: 20,
    img,
}

export default drewnianaFigurka