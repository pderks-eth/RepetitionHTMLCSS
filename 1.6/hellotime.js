// ask for name
let name = prompt("Wie ist dein Name?");

function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        return "Guten Morgen";
    } else if (hour >= 12 && hour < 18) {
        return "Guten Tag";
    } else if (hour >= 18 && hour < 22) {
        return "Guten Abend";
    } else {
        return "Gute Nacht";
    }
}

console.log(getGreeting());

alert(`${getGreeting()}, ${name}!`);
