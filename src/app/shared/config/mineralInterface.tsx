export type mineralName = "Żelazo" | "Srebro" | "Złom" | "Miedź" | "Węgiel" | "Drewno" | "Stal";
type itemName = "Drewniany amulet" | "Drewniana figurka" | "Lampa" | "Kable" | "Wiertło" | "Komputer" | "Drewniany Młotek" | "Miedziany Młotek" | "Żelazny Młotek" | "Stalowy Młotek" | "Srebrny Młotek" | "Drewniany Kilof" | "Miedziany Kilof" | "Żelazny Kilof" | "Srebrny Kilof" | "Stalowy Kilof" ;

interface PotrzebnySurowiec {
    typMineralu: mineralName,
    cena: number
}

interface Mineral {
    nazwa: mineralName,
    opis: string,
    img: string,
    wartosc: number,
    rudaImg?: string,
}

interface Item {
    nazwa: itemName,
    potrzebneSurowce: PotrzebnySurowiec[],
    boost: number
}

export default Mineral;
export type { PotrzebnySurowiec, Item};
 