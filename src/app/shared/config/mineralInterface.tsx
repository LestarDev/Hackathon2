type mineralName = "Żelazo" | "Srebro" | "Złoto" | "Miedź" | "Więgiel" | "Drewno" | "Stal";

interface Mineral {
    nazwa: mineralName,
    opis: string,
    img: string,
    wartosc: number
}

export default Mineral;