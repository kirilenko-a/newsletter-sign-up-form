const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const dismissBtn = document.getElementById("dismiss-btn");
const confirmedEmail = document.getElementById("confirm-email");
const main = document.getElementById("main");

const validateInput = (input) => input.validity.valid;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid = validateInput(emailInput);

  const email = emailInput.value;

  if (isValid) {
    form.reset();
    emailInput.classList.remove("input-error");
    main.classList.add("hidden");
    successMessage.classList.remove("hidden");
    successMessage.classList.add("flex");
    confirmedEmail.textContent = email;
  } else {
    emailInput.classList.add("input-error");
    errorMessage.textContent = "Valid email required";
    emailInput.setAttribute("aria-invalid", "true");
  }
});

emailInput.addEventListener("input", () => {
  const isValid = validateInput(emailInput);

  if (isValid) {
    errorMessage.textContent = "";
    emailInput.classList.remove("input-error");
    emailInput.removeAttribute("aria-invalid");
  }
});

dismissBtn.addEventListener("click", () => {
  main.classList.remove("hidden");
  successMessage.classList.add("hidden");
});
