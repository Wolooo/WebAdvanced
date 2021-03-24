for (let i = 0; i <= 7; i++) {
    let resultaat = "";
    for (let j = 1; j <= 7 - i; j++) {
        resultaat += " ";
    }
    for (let k = 1; k <= (i+ 1); k++) {
        resultaat += "*"
    }
    console.log(resultaat);
}