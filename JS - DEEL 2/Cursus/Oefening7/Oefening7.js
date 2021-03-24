let getallen = window.prompt("Geef twee getallen in gescheiden door een spatie.");

let getal1 = getallen.substring(0, getallen.indexOf(" "));
let getal2 = getallen.substring(getallen.indexOf(" "), getallen.length);

let uitkomst = parseInt(getal1) * parseInt(getal2);

document.getElementById("uitkomst").innerHTML = "De uitkomst van de vermenigvuldiging is: " + uitkomst;