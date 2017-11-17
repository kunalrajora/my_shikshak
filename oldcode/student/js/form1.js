function activateStep() {
  let formStep = this.parentElement;
  let nextFormStep = formStep.nextElementSibling;
  formStep.classList.add("animate-out");

  setTimeout(function() {
    formStep.classList.remove("is-showing");
    nextFormStep.classList.add("animate-in");
  }, 700);

  setTimeout(function() {
    nextFormStep.classList.remove("animate-in")
    nextFormStep.classList.add("is-showing");
  }, 1000);
}

function finalStep() {
  let formStep = this.parentElement;
  formStep.classList.add("animate-up");
  setTimeout(function() {
    formStep.classList.remove("animate-up");
    formStep.classList.remove("is-showing");
  }, 700);
}

let nextButtons = document.getElementsByClassName("next");

for (let i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener("click", activateStep);
}

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", finalStep);