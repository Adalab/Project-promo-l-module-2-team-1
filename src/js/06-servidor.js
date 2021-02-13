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
      shareLink = data.cardURL;
      if (data.success === true) {
        cardResultElement.innerHTML += `<h3 class="section__share_copy">La tarjeta ha sido creada:</h3>`;

        cardResultElement.innerHTML += `<p class="text_link_card"><a class"link-card" href="${shareLink}" class="section__twitter__button js-twitter-link" target="_blank">${shareLink}</a></p>`;
        cardResultElement.innerHTML += `<button class="share js-btn-twitter">
        <i class="fa fa-twitter" aria-hidden="true"></i> Compartir en Twitter
      </button>`;
        cardResultElement.innerHTML += `</a>`;
        createBtn.disabled = true;
      } else {
        cardResultElement.innerHTML += `Por favor, completa todos los campos marcados con *`;
      }
    });
}
createBtn.addEventListener("click", handleCreateBtn);

/* const twitterButton = document.querySelector(".js-btn-twitter");

function handleTwitterShare() {
  const twitterLinkElement = document.querySelector(".js-twitter-link");
  twitterLinkElement.href = `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${shareLink}`;
}
twitterButton.addEventListener("click", handleTwitterShare);
 */
