function IsVijftig(getal1, getal2) {
    if ((getal1 === 50 || getal2 === 50) || (getal1 + getal2 === 50)) {
        return "HOERA 50";
    } else {
        return "Helaas geen 54";
    }
}

let getal1 = 30;
let getal2 = 30;

console.log(IsVijftig(getal1, getal2));