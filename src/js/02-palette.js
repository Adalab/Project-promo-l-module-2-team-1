'use.strict';

const paletteElements = document.querySelectorAll('.js-palette');
const photoCardElement = document.querySelector('.js-card');

function updatePalette() {
    photoCardElement.classList.remove('palette-1', 'palette-2', 'palette-3', 'palette-4');
    const checkedPalette = document.querySelector('.js-palette:checked');
    const checkedPaletteValue = checkedPalette.value;
    photoCardElement.classList.add('palette-' + checkedPaletteValue);
    saveInLocalStorage();
}

for (const onePalette of paletteElements) {
onePalette.addEventListener('change', updatePalette);
}
