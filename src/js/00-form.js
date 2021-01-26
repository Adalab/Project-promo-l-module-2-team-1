`use strict`

const nameElement=document.querySelector (`.js-name`);
const namePreviewElement = document.querySelector(`.js-preview-name`);

function handleName (ev){
    const nameValue=ev.target.value;
    if (nameValue === '') {
        namePreviewElement.innerHTML = 'Nombre apellido';
      } else {
        namePreviewElement.innerHTML = nameValue;
      }
    }


nameElement.addEventListener("keyup",handleName);


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

