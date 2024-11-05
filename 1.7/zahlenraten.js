let zahl = Math.floor(Math.random() * 100) + 1;
console.log(zahl)
let geraten = false
let versuche = 0

alert("Willkommen beim Zahlenraten! Versuche die Zahl zwischen 0 und 100 zu erraten.")
while (!geraten) {
    let gerateneZahl = parseInt(prompt("Gib eine Zahl ein:"))
    versuche++
    if (gerateneZahl < zahl) {
        alert("Zu klein!")
    } else if (gerateneZahl > zahl) {
        alert("Zu groß!")
    } else {
        geraten = true
    }
}

alert(`Richtig geraten! Die Zahl war ${zahl}. Du hast ${versuche} Versuche gebraucht.`)
