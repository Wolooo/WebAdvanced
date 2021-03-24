let oudeZin = "ik wil een koekje"
let vervangZin = "lasagne van pxl-catering";

let nieuweZin = oudeZin.replace("koekje", vervangZin).toUpperCase();

document.getElementById("nieuweZin").innerHTML = nieuweZin;

console.log(nieuweZin);

