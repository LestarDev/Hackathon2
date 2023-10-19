import { Item } from "../../config/mineralInterface";

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
    boost: 100,
}

export default wiertlo;