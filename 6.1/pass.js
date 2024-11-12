let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");
let form = document.getElementById("passwordForm");
let submit = document.getElementById('submit');

submit.addEventListener("submit", (event) => {
    event.preventDefault();
    if (password == confirm_password) {
        console.log('password ist gleich');
    } else {
        console.log('etwas ist falsch');
    }
});

console.log('test');
