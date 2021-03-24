//console.log(hondenrassen[randomItem - 1]);
//let randomItem = Math.floor(Math.random() * hondenrassen.length) + 1;
let hondenrassen = new Array(10);
let randomGetal = window.prompt("Geef een getal tussen 1 en 10");
let resultaat;

hondenrassen[0] = "Labrador";
hondenrassen[1] = "Duitse Herdershond";
hondenrassen[2] = "Golden Retriever";
hondenrassen[3] = "Sennenhond";
hondenrassen[4] = "Bull";
hondenrassen[5] = "Chihuahua";
hondenrassen[6] = "Boxer";
hondenrassen[7] = "Franse Bulldog";
hondenrassen[8] = "Engelse Bulldog";
hondenrassen[9] = "Spaniel";

if (randomGetal > 10 || randomGetal < 1) {
    resultaat = "Sorry katten zijn niet toegelaten";
    document.getElementById("arrayItem").style.color = 'red';
} else {
    resultaat = "Random gegenereerde hondenras is: " + hondenrassen[randomGetal - 1];
}

document.getElementById("arrayItem").innerHTML = resultaat;
