// alert when button is clicked via ID
let button = document.getElementById('button');
button.onclick = () => {
    alert('extern Alert');
}

// alert when button is clicked via ID
let button2 = document.getElementById('button2');
button2.onclick = async () => {
    document.getElementById('text').innerHTML = 'extern Text';
    await sleep(3000);
    document.getElementById('text').innerHTML = '';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
