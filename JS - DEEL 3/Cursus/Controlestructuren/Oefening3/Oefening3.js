let d = new Date();

let tijd = d.getHours();

if (tijd > 7 && tijd < 12) {
    document.getElementById("welkomszin").innerHTML = "Goeiemorgen, het is " + d.getUTCDate();
} else if (tijd > 12 && tijd < 18) {
    document.getElementById("welkomszin").innerHTML = "Goede dag, het is " + d.getUTCDate();
} else {
    document.getElementById('welkomszin').innerHTML = "Goede avond, het is " + d.getUTCDate();
}