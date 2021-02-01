`use strict`;


//Traer el elemento del html//
debugger
const designCollapsableHeader=document.querySelector ('.js-collapsable-header'); 
const designCollapsableContainer = document.querySelectorAll('.js-collapsable-container');

function handleCollapsable(ev) {
    console.log('Me han clickado');
    designCollapsableContainer.classList.toggle('collapsable--close');

    ev.currentTarget.parentNode.querySelector('.js-container')
}
for (const collapsableElements of designCollapsableContainer) {
    collapsableElements.addEventListener('click', handleCollapsable);
}

