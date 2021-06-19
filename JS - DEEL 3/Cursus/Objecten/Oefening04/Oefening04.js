const gegevens = {
    naam: 'Agnaou',
    voornaam: 'Ilias',
    telefoonnummer: '0499112233',
    email: 'ilias@test.com',
    geboortedatum: '03/12/1996',
    Lengte: "155cm",
    Gewicht: "46kg",
    leeftijd: "24",
    Huidskleur: "Wit",
    Oogkleur: "Donkerbruin"
};


delete gegevens.Lengte;
delete gegevens.Gewicht;

for(let item in gegevens) {
    let li = document.createElement('li');
    let ul = document.getElementById('list');
    li.innerHTML = `
            <li>${item}: ${gegevens[item]}</li>
    `;
    ul.appendChild(li);
}