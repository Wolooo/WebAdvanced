let zin = "Ik wil een koekje.";

document.getElementById("Zin").innerHTML = "De zin: " + zin;

document.getElementById("positieNul").innerHTML = zin.charAt(0);
document.getElementById("positieDrie").innerHTML = zin.charAt(3);

document.getElementById("karakterK").innerHTML = zin.lastIndexOf('k');
document.getElementById("karakterE").innerHTML = zin.lastIndexOf('e');

document.getElementById('aantalKarakters').innerHTML = zin.length;