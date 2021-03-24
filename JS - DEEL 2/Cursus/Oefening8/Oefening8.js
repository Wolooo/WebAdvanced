let getallen = window.prompt("Geef twee getallen in gescheiden door een spatie.");

let getal1 = getallen.substring(0, getallen.indexOf(" "));
let getal2 = getallen.substring(getallen.indexOf(" "), getallen.length);

let vermenigvuldiging = parseInt(getal1) * parseInt(getal2);
let optellen = parseInt(getal1) + parseInt(getal2);
let aftrekken = parseInt(getal1) - parseInt(getal2);
let delen = parseFloat(getal1) / parseFloat(getal2);

document.getElementById("vermeningvuldiging").innerHTML = "De uitkomst van de vermenigvuldiging is: " + vermenigvuldiging;
document.getElementById("optellen").innerHTML = "De uitkomst van de optellen is: " + optellen;
document.getElementById("aftrekken").innerHTML = "De uitkomst van de aftrekken is: " + aftrekken;
document.getElementById("delen").innerHTML = "De uitkomst van de delen is: " + delen;