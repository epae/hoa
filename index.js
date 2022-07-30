var button = document.getElementById("Random");
button.onclick = function generate() {
var randomNum = Math.floor((Math.random() * 3) + 1);
var el = document.getElementById('RD');
el.innerHTML = randomNum;

if (randomNum ===1) alert("Kieu A")
if (randomNum ===2) alert("Nguyen B")
if (randomNum ===3) alert("Le C")
};
