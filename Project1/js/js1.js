const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const line1 = $('.line1');
const line2 = $('.line2');
const main = $('.main');

const textA = document.createElement("p");
textA.innerHTML = "a: ";
line1.appendChild(textA);

const inputA = document.createElement("input");
inputA.placeholder = "number a";
inputA.className = "inputUser";
line1.appendChild(inputA);

const textB = document.createElement("p");
textB.innerHTML = "b: ";
line2.appendChild(textB);

const inputB = document.createElement("input");
inputB.placeholder = "number b";
inputB.className = "inputPassword";
line2.appendChild(inputB);

const btnSubmit = document.createElement("button");
btnSubmit.innerHTML = "Submit";
btnSubmit.className = "btnSubmit";
main.appendChild(btnSubmit);

btnSubmit.addEventListener("click", function() {
    let a_value = parseInt(inputA.value);
    let b_value = parseInt(inputB.value);
    alert(a_value + " + " + b_value +" = " + (a_value + b_value));
});
