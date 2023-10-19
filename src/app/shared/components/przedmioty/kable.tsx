import { Item } from "../../config/mineralInterface";

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
    boost: 15
}

export default kable