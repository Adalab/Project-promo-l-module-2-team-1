`use strict`
/*
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
        mailPreviewElement.href =( `mailto: ${mailValue}`);
      }
    }

mailElement.addEventListener("keyup", handleMail);

*/
const inputsTextConfig = [
  {
    inputClass: '.js-input-name',
    cardClass: '.js-card-name',
    defaultValue: 'Nombre apellidos',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML'
  },
  {
      inputClass: '.js-input-job',
      cardClass: '.js-card-job',
      defaultValue: 'DEVELOPER',
      cardPrefix: '',
      cardElementAttribute: 'innerHTML'
  },
  {
      inputClass: '.js-input-email',
      cardClass: '.js-card-email',
      defaultValue: '',
      cardPrefix: 'mailto:',
      cardElementAttribute: 'href'
  },
  {
      inputClass: '.js-input-phone',
      cardClass: '.js-card-phone',
      defaultValue: '',
      cardPrefix: 'tel:',
      cardElementAttribute: 'href'
  },
  {
    inputClass: '.js-input-linkedin',
    cardClass: '.js-card-linkedin',
    defaultValue: '',
    cardPrefix: 'https://www.linkedin.com/in/',
    cardElementAttribute: 'href'
  },
  {
      inputClass: '.js-input-github',
      cardClass: '.js-card-github',
      defaultValue: '',
      cardPrefix: 'https://www.github.com/',
      cardElementAttribute: 'href'
    }
];
function updateAllInputs() {
  // recorro los 6 inputs del array inputsTextConfig
  for (const inputTextConfig of inputsTextConfig) {
    // por cada objeto del array inputsTextConfig hago:
    console.log(
      'Empiezo una nueva iteración del for con la configuración del elemento:',
      inputTextConfig
    );
    // obtengo el elemento input, el origen
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    console.log('Elemento del formulario:', inputTextConfig.inputClass, inputElement);
    // obtengo el elemento de la card, el destino
    const cardElement = document.querySelector(inputTextConfig.cardClass);
    console.log('Elemento del la tarjeta:', inputTextConfig.cardClass, cardElement);
    // obtengo el valor del input
    let newValue = inputElement.value;
    // compruebo si tengo que usar el innerHTML, es decir si es el nombre o la profesion
    if (inputTextConfig.cardElementAttribute === 'innerHTML') {
      // compruebo si está vacío
      if (inputElement.value === '') {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }
      console.log('Valor por defecto:', inputTextConfig.defaultValue);
      console.log('Nuevo valor a poner en la tarjeta:', newValue);
      // actualizo la tarjeta
      cardElement.innerHTML = newValue;
    }
    // si no es de tipo innerHTML, compruebo si tengo que usar el href, es decir si es el email, phone, linkedin o gihtub
    else if (inputTextConfig.cardElementAttribute === 'href') {
      // compruebo si está vacío
      if (inputElement.value === '') {
        newValue = '#';
      } else {
        // limpio el prefijo por si acaso la usuaria ha escrito cosas como:
        // - https://github.com/migueldelmazo en vez de migueldelmazo a secas
        // - https://www.linkedin.com/in/migueldelmazo en vez de migueldelmazo a secas
        newValue = newValue.replace(inputTextConfig.cardPrefix, '');
        // vuelvo a añadir el prefijo https://www.linkedin.com/in/
        newValue = inputTextConfig.cardPrefix + newValue;
      }
      console.log('Valor del prefijo:', inputTextConfig.cardPrefix);
      console.log('Nuevo valor a poner en la tarjeta:', newValue);
      // actualizo la tarjeta
      cardElement.href = newValue;
    }
    console.log('-------------------------------------------------');
  }
  saveInLocalStorage();
}
// obtengo los 6 inputs del html
const inputTextElements = document.querySelectorAll('.js-input-text');
// escucho a cada uno de ellos con un addEventListener
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('keyup', updateAllInputs);
}
// al arrancar la página proceso todos los inputs
// como updateAllInputs no recibe eventos puedo ejecutar esta función al inicio, tras un evento de usuaria o cuando me de la real gana!!!
