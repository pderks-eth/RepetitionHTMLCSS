let counter = 0;
function incrementCounter() {
    counter++;
    document.getElementById("counter").innerText = counter;
}

function showAlert() {
    alert("Hallo, Welt");
    incrementCounter();
}

function showAlert2() {
    alert("Hallo, Welt2");
    incrementCounter();
    incrementCounter();
}

function moveBall(event) {
    const ball = document.getElementById('ball');
    const container = document.getElementById('ball-container');
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left - ball.offsetWidth / 2;
    const y = event.clientY - rect.top - ball.offsetHeight / 2;

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
}

document.getElementById('ball-container').addEventListener('click', moveBall);
