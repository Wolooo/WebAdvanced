let code = prompt('Vul uw promotiecode in', 'uw code');
let tekst = 'de code die u invoerde was: ' + code;

document.getElementById('kortingscode').innerHTML = tekst;

console.log(document.getElementById('kortingscode'));