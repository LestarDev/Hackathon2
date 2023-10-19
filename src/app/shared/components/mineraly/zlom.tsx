import Mineral from "../../config/mineralInterface";
import rudaImg from "../../../../assets/rock_scrap.png"
import scrapPNG from "./../../../../assets/scrap.png";

const zlom: Mineral = {
    nazwa: 'Złom',
    opis: 'Złom to przetworzone lub nieużywane materiały, które można ponownie wykorzystać po recyklingu. Gromadzenie złomu w miejscach do tego nieprzystosowanych może stanowić poważne zagrożenie dla środowiska naturalnego. W zależności od materiału może się rozkładać od kilku do nawet kilku tysięcy lat.',
    img: scrapPNG,
    wartosc: 0,
    rudaImg
}

export default zlom;