const btn = document.getElementById("btn")
const firstOption = document.getElementById("first-option")
const secondOption = document.getElementById("second-option")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

btn.addEventListener("click", function() {
    firstOption.textContent = "";
    secondOption.textContent = "";
    firstPassword();
    secondPassword();
    console.log(firstOption.textContent);
    console.log(secondOption.textContent);
})

function firstPassword() {
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        firstOption.textContent += characters[randomIndex];
    }
}

function secondPassword() {
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        secondOption.textContent += characters[randomIndex];
    }
}