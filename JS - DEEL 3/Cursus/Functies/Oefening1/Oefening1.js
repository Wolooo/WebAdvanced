let getal1 = 5;
let getal2 = 6;

let resultaat = document.getElementById("resultaat");

function Vermenigvuldiging(getal1, getal2) {
    return getal1 * getal2;
}

resultaat.innerHTML = Vermenigvuldiging(getal1, getal2);