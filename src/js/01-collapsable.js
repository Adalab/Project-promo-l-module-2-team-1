`use strict`;


//Traer el elemento del html//

const designCollapsableHeader=document.querySelector (".js-collapsable-header"); 
const designCollapsableContainer = document.querySelector('.js-collapsable-container')

function handleCollapsable() {
    console.log('Me han clickado');
    designCollapsableContainer.classList.toggle('collapsable--close')
}

designCollapsableHeader.addEventListener('click', handleCollapsable);