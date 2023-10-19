import Mineral from "../../config/mineralInterface";
import rudaImg from "../../../../assets/rock_silver.png"
import silverPNG from "./../../../../assets/silver.png";
import bgImg from "../../../../assets/items/cave20000.png"

const silver: Mineral = {
    nazwa: 'Srebro',
    opis: 'Wydobywane jest na całym świecie, a szczególnie w Chinach, Peru i Meksyku. Jest często wykorzystywanę w tworzeniu biżuterii ze wzlędu na jego połysk o charakterystycznym białym kolorze. Dawniej były stosowane do tworzenia monet. Jest też używany w przemyśle chemicznym i elektroniczym. Jest stosunkowo odporny na rdzawienie. ',
    img: silverPNG,
    wartosc: 0,
    rudaImg,
    bgImg
}

export default silver