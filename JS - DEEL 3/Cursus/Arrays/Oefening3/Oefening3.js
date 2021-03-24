let opleidingen = new Array("Toegepaste Informatie", "Elektronica-ICT", "Digitale vormgeving", "Internet Of Things", "Programmeren", "Systeem- en netwerkbeheer");
opleidingen.push("Mulitmedia- en communicatietechnologie");
let item = document.getElementById("arrayItem");

for (let i = 0; i < opleidingen.length; i++) {
    item.innerHTML += opleidingen[i] + '<br>';
}