import Mineral from "../../config/mineralInterface";
import rudaImg from "../../../../assets/rock_copper.png"
import copperPNG from "./../../../../assets/copper.png";
import bgImg from "../../../../assets/items/cave10000.png"

const copper: Mineral = {
    nazwa: 'Miedź',
    opis: `Jest to jeden z najważniejszych metali na Ziemii, powszechnie występujący na całej planecie a szczególnie w Ameryce Południowej i Chinach. Jest jednym z najlepszych przewodników elekytrycznych więc jest szeroko używanaw przemyśle elektronicznych i elektrycznym, w produkcji kabli, rur, monet i wielu innych produktów. Gdy miedź jest wystawiona na działanie powietrza to ta pokrywa się patyną o charakterystycznym zielonym kolorze. `,
    img: copperPNG,
    wartosc: 0,
    rudaImg,
    bgImg
}

export default copper;