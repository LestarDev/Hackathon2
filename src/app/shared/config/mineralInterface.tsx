type mineralName = "Żelazo" | "Srebro" | "Złom" | "Miedź" | "Węgiel" | "Drewno" | "Stal";

interface Mineral {
    nazwa: mineralName,
    opis: string,
    img: string,
    wartosc: number
}

export default Mineral;