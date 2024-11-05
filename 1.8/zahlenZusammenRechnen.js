let input = null;
let inputarray = [];
let oppChoice = null;

while (input !== "") {
    input = prompt("Gib eine Zahl ein:");
    if (input !== "") {
        input = parseInt(input);
        if (isNaN(input)) {
            alert("Das ist keine Zahl");
        } else {
            inputarray.push(input);
        }
    } else {
        oppChoice = prompt("Wie möchtest du die Zahlen berechnen? (add, sub, mul, div)");
        if (oppChoice === "add") {
            add(inputarray);
        } else if (oppChoice === "sub") {
            sub(inputarray);
        } else if (oppChoice === "mul") {
            mul(inputarray);
        } else if (oppChoice === "div") {
            div(inputarray);
        } else {
            alert("Ungültige Eingabe");
        }
    }
}

function add(inputarray) {
    inputarray.forEach((element) => {
        console.log(element);
        let sum = inputarray.reduce((acc, curr) => acc + curr, 0);
        console.log("Summe der Zahlen: " + sum);
        alert("Summe der Zahlen: " + sum);
    });
}

function sub(inputarray) {
    inputarray.forEach((element) => {
        console.log(element);
        let diff = inputarray.reduce((acc, curr) => acc - curr);
        console.log("Differenz der Zahlen: " + diff);
        alert("Differenz der Zahlen: " + diff);
    });
}

function mul(inputarray) {
    inputarray.forEach((element) => {
        console.log(element);
        let prod = inputarray.reduce((acc, curr) => acc * curr, 1);
        console.log("Produkt der Zahlen: " + prod);
        alert("Produkt der Zahlen: " + prod);
    });
}

function div(inputarray) {
    inputarray.forEach((element) => {
        console.log(element);
        let quot = inputarray.reduce((acc, curr) => acc / curr);
        console.log("Quotient der Zahlen: " + quot);
        alert("Quotient der Zahlen: " + quot);
    });
}
