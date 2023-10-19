import Mineral from "../../config/mineralInterface";
import rudaImg from "../../../../assets/rock_iron.png"
import ironPNG from "./../../../../assets/iron.png";

const iron: Mineral = {
    nazwa: "Żelazo",
    opis: `Występuje powszechnie na całym świecie, największymi producentami są Chiny, Australia, Brazylia. Jest używane do produkcji stali, wykorzystywane w budownictwie np. budowie mostów, konstrukcji metalowych oraz elektronice. Żelazo jest podatne na rdzawienie w obecności wilgoci i tlenu. W odpowiednich warunkach wykazuje właściwości magnetyczne.`,
    img: ironPNG,
    wartosc: 0,
    rudaImg,
}

export default iron;