"use strict";
const createBtn = document.querySelector(".js-create-btn");
const cardResultElement = document.querySelector(".js-card-result");
function handleCreateBtn(ev) {
  ev.preventDefault();
  console.log("Mis datos", getUserData());
  const url = "https://awesome-profile-cards.herokuapp.com/card";
  const data = getUserData();
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Server response:", data);
      if (data.success === true) {
        cardResultElement.innerHTML += "<h2>Tu tarjeta ha sido creada</h2>";
        cardResultElement.innerHTML += data.cardURL;
        cardResultElement.innerHTML += "<button>Twitter</button>";
      } else {
        cardResultElement.innerHTML = "Revisa los campos, te faltan algunos!";
      }
    });
}
createBtn.addEventListener("click", handleCreateBtn);
