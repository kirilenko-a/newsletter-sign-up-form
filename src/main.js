const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

const validateInput = (input) => {
  if (!input.validity.valid) {
    return false;
  }

  return true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid = validateInput(emailInput);

  if (isValid) {
    form.reset();
    emailInput.classList.remove("input-error");
  } else {
    emailInput.classList.add("input-error");
    errorMessage.textContent = "Valid email required";
    emailInput.setAttribute = "aria-invalid";
  }
});

emailInput.addEventListener("input", () => {
  const isValid = validateInput(emailInput);

  if (isValid) {
    errorMessage.textContent = "";
    emailInput.removeAttribute("aria-invalid");
  }
});
