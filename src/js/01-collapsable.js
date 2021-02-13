`use strict`;

//Traer el elemento del html//

const collapsableHeaders = document.querySelectorAll(".js-collapsable-header");
for (const collapsableHeader of collapsableHeaders) {
  collapsableHeader.addEventListener("click", changeCollapsable);
}

function changeCollapsable(ev) {
  // cojo la cabecera pulsada
  // - la cabecera es currentTarget porque estoy haciendo addEventListener sobre las cabeceras
  const clickedHeader = ev.currentTarget;
  // cojo el collapsable pulsado, que es nodo o etiqueta padre de la cabecera pulsada
  const clickedCollapsable = clickedHeader.parentNode;
  // esto también podemos hacerlo con https://developer.mozilla.org/es/docs/Web/API/Element/closest

  // recorro todos los collapsables
  const allCollapsables = document.querySelectorAll(
    ".js-collapsable-container"
  );
  for (const collapsable of allCollapsables) {
    // compruebo si es el collapsable pulsado
    if (clickedCollapsable === collapsable) {
      // si es el pulsado, le hago un toggle
      collapsable.classList.toggle("collapsable--close");
    } else {
      // si no es el pulsado, lo cierro
      collapsable.classList.add("collapsable--close");
    }
  }
}

//CREA TU TARJETA, esta función es para el collapsable del botón crea tu tarjeta
const hiddenButton = document.querySelector(".js-hidden");

function handleHiddenButton(ev) {
  const hiddenCollapsableButton = document.querySelector(
    ".js-hidden-collapsable"
  );
  console.log(hiddenCollapsableButton);
  const clicked = ev.currentTarget;
  console.log(clicked);

  if (clicked !== hiddenCollapsableButton) {
    hiddenCollapsableButton.classList.remove("hidden");
  }
}

hiddenButton.addEventListener("click", handleHiddenButton);
