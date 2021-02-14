`use strict`;

const inputsTextConfig = [
  {
    inputClass: ".js-input-name",
    cardClass: ".js-card-name",
    defaultValue: "Nombre apellidos",
    cardPrefix: "",
    cardElementAttribute: "innerHTML",
  },
  {
    inputClass: ".js-input-job",
    cardClass: ".js-card-job",
    defaultValue: "Developer",
    cardPrefix: "",
    cardElementAttribute: "innerHTML",
  },
  {
    inputClass: ".js-input-email",
    cardClass: ".js-card-email",
    defaultValue: "",
    cardPrefix: "mailto:",
    cardElementAttribute: "href",
  },
  {
    inputClass: ".js-input-phone",
    cardClass: ".js-card-phone",
    defaultValue: "",
    cardPrefix: "tel:",
    cardElementAttribute: "href",
  },
  {
    inputClass: ".js-input-linkedin",
    cardClass: ".js-card-linkedin",
    defaultValue: "",
    cardPrefix: "https://www.linkedin.com/in/",
    cardElementAttribute: "href",
  },
  {
    inputClass: ".js-input-github",
    cardClass: ".js-card-github",
    defaultValue: "",
    cardPrefix: "https://www.github.com/",
    cardElementAttribute: "href",
  },
];
function updateAllInputs() {
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    const cardElement = document.querySelector(inputTextConfig.cardClass);

    let newValue = inputElement.value;

    if (inputTextConfig.cardElementAttribute === "innerHTML") {
      if (inputElement.value === "") {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }

      cardElement.innerHTML = newValue;
    } else if (inputTextConfig.cardElementAttribute === "href") {
      if (inputElement.value === "") {
        newValue = "#";
      } else {
        newValue = newValue.replace(inputTextConfig.cardPrefix, "");
        newValue = inputTextConfig.cardPrefix + newValue;
      }

      cardElement.href = newValue;
    }
  }
  saveInLocalStorage();
}

const inputTextElements = document.querySelectorAll(".js-input-text");

for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener("keyup", updateAllInputs);
};
