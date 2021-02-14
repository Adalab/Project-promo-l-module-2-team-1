"use strict";
const createBtn = document.querySelector(".js-create-btn");
const cardResultElement = document.querySelector(".js-card-result");

function handleCreateBtn(ev) {
  cardResultElement.innerHTML = "";
  ev.preventDefault();
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
        cardResultElement.innerHTML += `<p><a href="${shareLink}" class="text_link_card section__twitter__button js-twitter-link" target="_blank">${shareLink}</a></p>`;
        cardResultElement.innerHTML += `<a class="share js-btn-twitter" target="_blank">
        <i class="fa fa-twitter" aria-hidden="true"></i> Compartir en Twitter
      </a>`;
        createBtn.disabled = true;
        const twitterLink = document.querySelector(".js-btn-twitter");
        twitterLink.setAttribute(
          "href",
          `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${shareLink}`
        );
      } else {
        cardResultElement.innerHTML += `<h4 class= "title1">La tarjeta no puede ser creada aún</h4>`;
        cardResultElement.innerHTML += `<h4 class = "title1">Por favor, completa todos los campos marcados con *</h4>`;
      }
    });
}
createBtn.addEventListener("click", handleCreateBtn);
