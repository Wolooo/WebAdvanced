//BOLT NIET

let randomGetal = Math.floor(Math.random() * 50);
let gok = document.getElementById("raadGetal").value;

document.getElementById("randGetal").innerHTML = randomGetal;

function CheckGuess() {

    if (parseInt(gok) < randomGetal) { // als 8 groter is dan 5
        document.getElementById("tip").innerHTML = "Raad hoger";
    } else { // als 2 kleiner is dan 5
        document.getElementById("tip").innerHTML = "Raad lager";
    }

    if (parseInt(gok) === randomGetal) { // als 5 gelijk is aan 5
        document.getElementById("juist").innerHTML = "PROFICIAT U HEEFT HET GERADEN!";
    }
}
