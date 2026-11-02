const btn = document.getElementById("btn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;

let randomNumb1, randomNumb2, randomNumb3;
btn.onclick = function () {
    randomNumb1 = Math.floor(Math.random() * max) + min;
    randomNumb2 = Math.floor(Math.random() * max) + min;
    randomNumb3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNumb1;
    label2.textContent = randomNumb2;
    label3.textContent = randomNumb3;
}