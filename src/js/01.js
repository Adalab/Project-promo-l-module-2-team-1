`use strict`;

const mailElement=document.querySelector (".js-mail");
const mailPreviewElement = document.querySelector(".js-mail-icon");

function handleMail (ev){
    const mailValue = ev.target.value;
  if (mailValue === " ") {
      mailElement.value = "Este campo es obligatorio";
      } else { 
        mailPreviewElement.href =( `mailto: ${mailValue}`);
      }
    }

mailElement.addEventListener("keyup", handleMail);