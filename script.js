"use script";

// select elements from html
const inputList = document.querySelectorAll("input");
const labelList = document.querySelectorAll("label");

for (let i = 0; i < inputList.length; i++) {
  inputList[i].addEventListener("change", () => {
    // toggle will add the class to the element if it is not there and vice versa.
    labelList[i].classList.toggle("checkedList");
  });
}
