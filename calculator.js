// // const name = window.prompt("Enter you Name.");
// const span = document.createElement("span");
// span.innerText = window.prompt("Enter your name");
//selectors
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const clear = document.querySelector("#clear");
const display = document.querySelector("#display");
const back = document.querySelector("#back");
const equalFun = document.querySelector("#equalFun");

//event
one.addEventListener("click", () => {
  //   console.log("one");
  display.value += "1";
});
two.addEventListener("click", () => {
  display.value += "2";
});
three.addEventListener("click", () => {
  display.value += "3";
});
four.addEventListener("click", () => {
  display.value += "4";
});
five.addEventListener("click", () => {
  display.value += "5";
});
six.addEventListener("click", () => {
  display.value += "6";
});
seven.addEventListener("click", () => {
  display.value += "7";
});
eight.addEventListener("click", () => {
  display.value += "8";
});
nine.addEventListener("click", () => {
  display.value += "9";
});
zero.addEventListener("click", () => {
  display.value += "0";
});
dot.addEventListener("click", () => {
  display.value += ".";
});
clear.addEventListener("click", () => {
  display.value = "";
});
back.addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
});
equalFun.addEventListener("click", () => {
  display.value = eval(display.value);
});
