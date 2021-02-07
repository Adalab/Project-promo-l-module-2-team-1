'user strict';

const resetButtonElement = document.querySelector(".js-reset");

function resetInfo() {
  localStorage.clear("userData");
  const allInputsData = document.querySelectorAll(".js-input-text");
  for (const allInputsDataoff of allInputsData) {
    allInputsDataoff.value = "";
  }
  /* document.querySelector("js-palette").checked = true;
  photoCardElement.classList.remove(".palette4");
  photoCardElement.classList.remove(".palette3");
  photoCardElement.classList.add(".palette2");
  photoCardElement.classList.add(".palette1");
  localStorage.removeItem("data");
  profileImage.style.backgroundImage = `url(${currentPhoto})`;
  profilePreview.style.backgroundImage = `url(${currentPhoto})`;
  shareFormLink.innerHTML = "";
  createLink.classList.add("show");
  shareButton.setAttribute("disabled", "false");
  shareButton.classList.remove("disabled");

  updateAllInputs();
  updatePalette();
  updatePhoto();  */
}
resetButtonElement.addEventListener("click", resetInfo);