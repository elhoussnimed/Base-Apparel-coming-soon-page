//
const input = document.querySelector(".checkEmail input");
const btn = document.querySelector(".checkEmail button");
const errorIcon = document.querySelector(".checkEmail .error-icon");
const checkIcon = document.querySelector(".checkEmail .check-icon");
const msgText = document.createElement("p");
let value;

input.onblur = () => {
  value = input.value;
};

function checkEmail() {
  const regEx = /[\w+\-]+@\w+\.[A-Za-z]+/gi;
  if (regEx.test(value) === false) {
    msgText.innerHTML = "Please Provide A Valid Email";
    msgText.style.cssText =
      "margin-left: 15px; margin-top: 15px; color: red;text-align: left;font-weight: 600";
    btn.after(msgText);
    input.style.border = "1px solid red";
    errorIcon.style.display = "block";
    checkIcon.style.display = "none";
  } else {
    input.style.border = "1px solid green";
    msgText.innerHTML = "Your Email Is Valid";
    msgText.style.cssText =
      "margin-left: 15px; margin-top: 15px; color: green;text-align: left;font-weight: 600";
    btn.after(msgText);
    errorIcon.style.display = "none";
    checkIcon.style.display = "block";
  }
}

btn.addEventListener("click", checkEmail);
