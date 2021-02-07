const inputsTextConfig=[{inputClass:".js-input-name",cardClass:".js-card-name",defaultValue:"Nombre apellidos",cardPrefix:"",cardElementAttribute:"innerHTML"},{inputClass:".js-input-job",cardClass:".js-card-job",defaultValue:"DEVELOPER",cardPrefix:"",cardElementAttribute:"innerHTML"},{inputClass:".js-input-email",cardClass:".js-card-email",defaultValue:"",cardPrefix:"mailto: ",cardElementAttribute:"href"},{inputClass:".js-input-phone",cardClass:".js-card-phone",defaultValue:"",cardPrefix:"tel:",cardElementAttribute:"href"},{inputClass:".js-input-linkedin",cardClass:".js-card-linkedin",defaultValue:"",cardPrefix:"https://www.linkedin.com/in/",cardElementAttribute:"href"},{inputClass:".js-input-github",cardClass:".js-card-github",defaultValue:"",cardPrefix:"https://www.github.com/",cardElementAttribute:"href"}];function updateAllInputs(){for(const e of inputsTextConfig){const t=document.querySelector(e.inputClass);console.log("Elemento del formulario:",e.inputClass,t);const l=document.querySelector(e.cardClass);console.log("Elemento del la tarjeta:",e.cardClass,l);let a=t.value;"innerHTML"===e.cardElementAttribute?(a=""===t.value?e.defaultValue:t.value,console.log("Valor por defecto:",e.defaultValue),console.log("Nuevo valor a poner en la tarjeta:",a),l.innerHTML=a):"href"===e.cardElementAttribute&&(""===t.value?a="#":(a=a.replace(e.cardPrefix,""),a=e.cardPrefix+a),console.log("Valor del prefijo:",e.cardPrefix),console.log("Nuevo valor a poner en la tarjeta:",a),l.href=a),console.log("-------------------------------------------------")}saveInLocalStorage()}const inputTextElements=document.querySelectorAll(".js-input-text");for(const e of inputTextElements)e.addEventListener("keyup",updateAllInputs);const collapsableHeaders=document.querySelectorAll(".js-collapsable-header");for(const e of collapsableHeaders)e.addEventListener("click",changeCollapsable);function changeCollapsable(e){const t=e.currentTarget.parentNode,l=document.querySelectorAll(".js-collapsable-container");for(const e of l)t===e?e.classList.toggle("collapsable--close"):e.classList.add("collapsable--close")}const paletteElements=document.querySelectorAll(".js-palette"),photoCardElement=document.querySelector(".js-card");function updatePalette(){photoCardElement.classList.remove("palette-1","palette-2","palette-3","palette-4");const e=document.querySelector(".js-palette:checked").value;photoCardElement.classList.add("palette-"+e),saveInLocalStorage()}for(const e of paletteElements)e.addEventListener("change",updatePalette);const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");let photo="";function getImage(e){e.preventDefault();const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){}function updatePhoto(){const e=photo||"url(../images/photo-preview1.jpg)";profilePreview.style.backgroundImage=`url(${e})`,profileImage.style.backgroundImage=`url(${e})`}function fakeFileClick(e){e.preventDefault(),fileField.click()}function saveInLocalStorage(){const e={photo:photo,palette:parseInt(document.querySelector(".js-palette:checked").value),name:document.querySelector(".js-input-name").value,job:document.querySelector(".js-input-job").value,email:document.querySelector(".js-input-email").value,phone:document.querySelector(".js-input-phone").value,linkedin:document.querySelector(".js-input-linkedin").value,github:document.querySelector(".js-input-github").value},t=JSON.stringify(e);localStorage.setItem("userData",t)}function getFromLocalStorage(){const e=localStorage.getItem("userData");if(null!==e){const t=JSON.parse(e);document.querySelector(".js-input-name").value=t.name,document.querySelector(".js-input-job").value=t.job,document.querySelector(".js-input-email").value=t.email,document.querySelector(".js-input-phone").value=t.phone,document.querySelector(".js-input-linkedin").value=t.linkedin,document.querySelector(".js-input-github").value=t.github,photo=t.photo;const l=document.querySelectorAll(".js-palette");for(const e of l)parseInt(e.value)===t.palette&&(e.checked=!0);updateAllInputs(),updatePalette(),updatePhoto()}}console.log(fr.result),photo=fr.result,uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage),getFromLocalStorage();