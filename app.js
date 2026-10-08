// let matem = {
//   floor: (num) => {
//     if (num > 0) {
//       return num - (num % 1);
//     } else {
//       return num - (num % 1) - 1;
//     }

let titleEl = document.getElementById("title");
// let plusEl = document.getElementsByClassName("plus");
// let minusEl = document.getElementsByClassName("minus");
// let resetEl = document.getElementsByClassName("reset");

window.plus = function () {
  titleEl.textContent = Number(titleEl.textContent) + 1;
};
console.log(plus);
window.minus = function () {
  let minuss = (titleEl.textContent = Number(titleEl.textContent));
  if (minuss > 0) {
    titleEl.textContent = minuss - 1;
  }
};
window.reset = function () {
  titleEl.textContent = 0;
};
