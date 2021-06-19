let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
    //{voornaam: 'Iliass', naam: 'Agnaou', stad: 'Genk'}
];

//1) Schrijf een functie waarin je de array uitfiltert met mensen die in genk wonen => moet array mag geen object zijn
function FilterArray(array) {
    for(let item in array) {
        if (array[item].stad === "Genk") {
            let persoonArray = Object.values(array[item]);
            console.log(persoonArray);
        }
    }
}

FilterArray(klanten);

//2) tel letters van alle familienamen
function CountFamilyNameNumbers(array) {
    for (let item in array) {
        console.log(array[item].naam + ": " + array[item].naam.length);
    }
}

CountFamilyNameNumbers(klanten);

//3) functie schrijven dat elke stad aanpast naar Antwerpen en index * aantal keer antwerpen
function ReplaceStadArray(array) {
    for (let item in array) {
        let nieuwStad = "Antwerpen";
        array[item].stad = nieuwStad
        console.log(array[item]);
    }
}

//ReplaceStadArray(klanten);

//4) append elke voornaam in 1 string als laatste naam length even is moet die in hoofdletters komen
function AppendFirstNames(array) {
    let uitkomst = "";
    for (let item in array) {
        uitkomst += array[item].voornaam;
    }
    if (uitkomst.length % 2 === 0) {
        let laatsteVoornaam = uitkomst.substring(uitkomst.length, uitkomst.length - array[array.length -1].voornaam.length);
        let nieuwUitkomst = uitkomst.substring(0, uitkomst.length - array[array.length - 1].voornaam.length);
        nieuwUitkomst += laatsteVoornaam.toUpperCase();
        console.log(nieuwUitkomst);
    }
    else {
        console.log(uitkomst);
    }
}

AppendFirstNames(klanten);

//5) Genereer p voor elk object in array
function GenereerP(array) {
    let div = document.getElementById('object');
    let p = document.createElement('p');
    for (let item in array) {
        let persoonArray = Object.values(array[item]);
        p.innerHTML += `<p>${persoonArray}</p>`
    }
    div.appendChild(p);
}

window.onload = GenereerP(klanten);