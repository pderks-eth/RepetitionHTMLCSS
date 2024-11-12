let cup1 = document.getElementById("cup-1");
let cup2 = document.getElementById("cup-2");
let cup3 = document.getElementById("cup-3");
let cups = document.querySelectorAll("img");
let shuffleBtn = document.getElementById("shuffleButton");
let cupsArray = [cup1, cup2, cup3];


// Functions
function shuffleCups() {
    cupsArray.sort(() => Math.random() - 0.5);
    console.log(cupsArray);
    return cupsArray;
}

function setNewPos() {
    cupsArray.forEach((cup) => {
        cup.classList.remove("cup-open");
        cup.classList.remove("cup-open-ball");
        cup.classList.add("cup");
    });

    let shuffledCups = shuffleCups();
    gameArea.innerHTML = "";
    for (let i = 0; i < shuffledCups.length; i++) {
        gameArea.appendChild(shuffledCups[i]);
    }
}

function revealCup() {
    console.log("Cup clicked");
    cupsArray.forEach((cup) => {
        if (cup === this) {
            if (cup === cup1) {
                console.log("Cup 1 clicked You Win");
                cup.classList.remove("cup");
                cup.classList.add("cup-open-ball");
            } else {
                cup.classList.remove("cup");
                cup.classList.add("cup-open");
            }
        } 
    });
}

// Event listeners
shuffleBtn.addEventListener("click", setNewPos);
cup1.addEventListener("click", revealCup);
cup2.addEventListener("click", revealCup);
cup3.addEventListener("click", revealCup);
