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


const positionElement=document.querySelector (`.js-position`);
const positionPreviewElement = document.querySelector(`.js-preview-position`);

function handlePosition(ev){
    const positionValue=ev.target.value;
    if (positionValue === '') {
        positionPreviewElement.innerHTML = 'Front-end developer'; // Preguntar porque si ponemos otro nombre solo aparece cuando está vacio (ejemplo si es diferente al que tenemos en el html)
      } else {
        positionPreviewElement.innerHTML = positionValue;
      }
    }

positionElement.addEventListener("keyup",handlePosition);


const mailElement=document.querySelector (".js-mail");
const mailPreviewElement = document.querySelector(".js-mail-icon");

function handleMail (ev){
    const mailValue = ev.target.value;
  if (mailValue === " ") {
      mailElement.value = "Este campo es obligatorio";
      } else { 
        mailPreviewElement.href =(`mailto:${mailValue}`);
      }
    }

mailElement.addEventListener("keyup", handleMail);

