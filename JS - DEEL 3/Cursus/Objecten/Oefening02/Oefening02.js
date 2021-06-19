const gegevens = {
    naam: 'Agnaou',
    voornaam: 'Ilias',
    telefoonnummer: '0499112233',
    email: 'ilias@test.com',
    geboortedatum: '03/12/1996',
    leeftijd: '24'
};

//toon het voledige object in de console
console.log(gegevens);

for(let item in gegevens) {
    let tr = document.createElement('tr');
    let table = document.getElementById('table');
    let zin = document.getElementById('zin');
    table.className = "table";
    tr.className = "tr";
    tr.innerHTML = `
        <tr style="text-align: left; border: 1px solid black;">
            <th>${item}</th>
        </tr>
        <tr>
            <td>${gegevens[item]}</td>
        </tr>
    `;
    table.appendChild(tr);
    let volledigeNaam = gegevens.voornaam + " " + gegevens.naam;
    zin.innerHTML = "Mijn naam is " + volledigeNaam + " en ik ben geboren op " + gegevens.geboortedatum
            + ". Mijn telefoonnummer is " + gegevens.telefoonnummer + " en mijn mailadres is " + gegevens.email +
        ". Via deze gegevens kan je mij altijd contacteren";
}