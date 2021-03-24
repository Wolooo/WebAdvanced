let aantalKarakters = window.prompt("Geef in hoeveel karakters u wilt gebruiken voor de driehoek");

let resultaat = document.getElementById("resultaat");

if (aantalKarakters < 0 || aantalKarakters > 10) {
    resultaat.innerHTML = "Niet mogelijk";
    resultaat.style.color = "red";
} else {
    for (let i = 1; i <= aantalKarakters; i++) {
        for (let j = 1; j <= i; j++) {
            resultaat.innerHTML += "*";
        }
        resultaat.innerHTML += "<br>";
    }
}

