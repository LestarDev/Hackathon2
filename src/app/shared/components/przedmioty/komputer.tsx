import { Item } from "../../config/mineralInterface";

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
    boost: 20
}

export default komputer