var addFlag = "";
var previous = 0;
var next = 0;
document.querySelectorAll(".number").forEach((number) => {
  number.addEventListener("click", () => {
    document.querySelector(".display").innerText = displayNumber(number);
  });
});
function displayNumber(params) {
  let screen = document.querySelector(".display").innerText;
  const display = screen + params.innerText;
  return display;
}
const addBtn = document.querySelector(".plus");
addBtn.addEventListener("click", () => {
  previous = parseInt(document.querySelector(".display").innerText);
  document.querySelector(".display").innerText = "";
  addFlag = "add";
  console.log(previous);
});

const minusBtn = document.querySelector(".minus");
minusBtn.addEventListener("click", () => {
  previous = parseInt(document.querySelector(".display").innerText);
  document.querySelector(".display").innerText = "";
  addFlag = "minus";
  console.log(previous);
});

const multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", () => {
  previous = parseInt(document.querySelector(".display").innerText);
  document.querySelector(".display").innerText = "";
  addFlag = "multiply";
  console.log(previous);
});

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", () => {
  previous = parseInt(document.querySelector(".display").innerText);
  document.querySelector(".display").innerText = "";
  addFlag = "divide";
  console.log(previous);
});

console.log("previous2" + previous);
document.querySelector(".equals").addEventListener("click", () => {
  switch (addFlag) {
    case (addflag = "add"):
      next = parseInt(document.querySelector(".display").innerText);
      console.log(next);
      console.log(previous + "of before summing");
      var sum = previous + next;
      console.log("previous after summing" + previous);
      console.log("next after summing" + next);
      console.log("sum" + sum);
      document.querySelector(".display").innerText = sum;
      sum = 0;
      break;
    case (addflag = "minus"):
      next = parseInt(document.querySelector(".display").innerText);
      var substract = previous - next;
      document.querySelector(".display").innerText = substract;
      console.log(next);
      break;
    case (addflag = "multiply"):
      next = parseInt(document.querySelector(".display").innerText);
      var substract = previous * next;
      document.querySelector(".display").innerText = substract;
      console.log(next);
      break;
    case (addflag = "divide"):
      next = parseInt(document.querySelector(".display").innerText);
      var substract = previous / next;
      document.querySelector(".display").innerText = substract;
      console.log(next);
      break;
    // code block
  }
});

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  next = 0;
  previous = 0;
  document.querySelector(".display").innerText = "";
});

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", () => {
  document.querySelector(".display").innerText = "";
});
