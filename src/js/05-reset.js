"user strict";

const resetButtonElement = document.querySelector(".js-reset");

function resetInfo() {
  resetInputsForm();
  resetPhotocardPalettes();
  resetPalettes();
  clearPhoto();

  localStorage.clear();
}

function resetInputsForm() {
  const allInputsForm = document.querySelectorAll(".js-input-text");
  for (const inputForm of allInputsForm) {
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
  updatePalette();
}

function clearPhoto() {
  photo = "";
  profilePreview.style.backgroundImage = "";
  profileImage.style.backgroundImage = "";
  updatePhoto();
}

resetButtonElement.addEventListener("click", resetInfo);
