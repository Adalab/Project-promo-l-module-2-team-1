"user strict";

const resetButtonElement = document.querySelector(".js-reset");

function resetInfo() {
  localStorage.removeItem("userData");
  resetInputsForm();
  photo = "url(../images/photo-preview1.jpg)";
  console.log(photo);
  resetPhotocardPalettes();
  resetPalettes();
  saveInLocalStorage();
}

function resetInputsForm() {
  const allInputsForm = document.querySelectorAll(".js-input-text");
  for (const inputForm of allInputsForm) {
    console.log(inputForm);
    inputForm.value = "";
  }
  updateAllInputs();
}

function resetPhotocardPalettes() {
  const checkedPalette = document.querySelector(".js-palette:checked");
  const checkedPaletteValue = checkedPalette.value;
  photoCardElement.classList.remove("palette-" + checkedPaletteValue);
  photoCardElement.classList.add("palette-1");
}

function resetPalettes() {
  const checkedPalette = document.querySelector(".js-palette:checked");
  checkedPalette.checked = false;
  const paletteDefault = document.querySelector(".js-paletteDefault");
  paletteDefault.checked = true;
}

resetButtonElement.addEventListener("click", resetInfo);
