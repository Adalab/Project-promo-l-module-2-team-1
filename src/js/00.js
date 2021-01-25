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


