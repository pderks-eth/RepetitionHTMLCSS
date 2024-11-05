document.querySelector("body").style.backgroundColor = "gray";
document.querySelector("h1").innerHTML = "Philipp";
document.querySelector("h1").style.color = "white";

let pelements = document.querySelector("p");

pelements.classList.add("textsize");

document.querySelector(".textsize").style.fontSize = "2em";

let ulist = document.querySelector("ul");

ulist.appendChild(document.createElement("li")).innerHTML = "Eintrag 3";

let Eintrag = document.querySelector("ul").children[1];

document.removeChild(document.querySelector("ul"));
