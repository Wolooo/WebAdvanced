
function CheckLeeftijd() {
    let leeftijd = window.prompt("Geef hier je leeftijd in: ");

    if (leeftijd < 18) {
        alert("Helaas... Probeer de volgende editie opnieuw.");
    }
    else {
        alert("U mag binnen.");
    }
}