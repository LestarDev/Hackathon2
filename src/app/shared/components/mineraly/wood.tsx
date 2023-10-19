import Mineral from "../../config/mineralInterface";
import rudaImg from "../../../../assets/tree.png"
import woodPNG from "./../../../../assets/wood.png";
import bgImg from "../../../../assets/items/planes0000.png"

const wood: Mineral = {
    nazwa: 'Drewno',
    opis: 'Jest to naturalny materiał pochodzenia roślinnego. Ma liczne zastosowania m.in. przy produkcji mebli, papieru, instrumentów muzycznych czy rzemiośle. Jest dość elastycznym materiałem, biodegradowalnym, ma właściwości izolacyjne termiczne i dźwiękowe. Należy zapobiegać niekontrolowanej wycince lasów na drewno ponieważ stanowią one naturalne siedlisko dla wielu dzikich zwierząt, a ich wycinka może powodować emisję gazów cieplarnianych',
    img: woodPNG,
    wartosc: 0,
    rudaImg,
    bgImg
}

export default wood