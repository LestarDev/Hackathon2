import Mineral from "../../config/mineralInterface";
import coalPNG from "./../../../../assets/coal.png";
import rudaImg from "../../../../assets/rock_coal.png"
import bgImg from "../../../../assets/items/cave10000.png"


const coal: Mineral = {
    nazwa: 'Węgiel',
    opis: 'Węgiel występuje niemal na całym świecie. Największymi jego wydobywcami są m.in. Chiny, USA, Australia. Ma bardzo szerokie zastosowania - jest używany do produkcji stali, jako źródło energii produkowanej w elektrowniach węglowych, w przemyśle chemicznym do produkcji różnych substancji jak np. syntetyczne paliwo, plastik. Produkcja energii z węgla jest szkodliwa dla środowiska z powodu emisji dwutlenku węgla i innych gazów cieplarnianych.',
    img: coalPNG,
    wartosc: 0,
    rudaImg,
    bgImg
}

export default coal