import { Item } from "../../config/mineralInterface";

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
    boost: 2
}
export default lampa;