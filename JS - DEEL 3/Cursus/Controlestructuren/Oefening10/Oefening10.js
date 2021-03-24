let resultaat = "";
for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= i; j++) {
        resultaat += "*";
    }
    console.log(resultaat);
    resultaat = '';
}