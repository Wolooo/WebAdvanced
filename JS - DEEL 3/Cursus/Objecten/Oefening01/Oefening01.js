const gegevens = {
    naam: 'Agnaou',
    voornaam: 'Ilias',
    telefoonnummer: '0499112233',
    email: 'ilias@test.com',
    leeftijd: '24'
};

//toon het voledige object in de console
console.log(gegevens);

for(let item in gegevens) {
    let tr = document.createElement('tr');
    let table = document.getElementById('table');
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
}