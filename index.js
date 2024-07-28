let container = document.querySelector(".container");
let gmail = document.querySelector(".gmail");
let success = document.querySelector(".success");
let btn = document.querySelector(".button");
let inputs = document.querySelector(".input");
let error = document.querySelector(".error");

btn.addEventListener("click", function () {
  let input = document.querySelector(".input").value;
  if (input.includes("@")) {
    container.classList.add("hidden");
    success.style.display = 'block'
    gmail.textContent = input;
    inputs.style.color = "red";
  } else {
    inputs.style.color = "red";
    error.classList.remove("hidden");
  }
});
