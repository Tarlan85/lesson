document.addEventListener('DOMContentLoaded', () => {
    const infoDown = document.querySelector('.infoDown ul');
    
    infoDown.addEventListener('click', (event) => {
        const target = event.target.closest('li');
        
        if (!target) return;
        
        toggleVisibility(target);
    });
});
function toggleVisibility(selectedLi) {
    const allParagraphs = document.querySelectorAll('.lineprg');
    const allIcons = document.querySelectorAll('.fa-chevron-right');

    // Найти соответствующий абзац для выбранного элемента списка
    const correspondingParagraph = selectedLi.nextElementSibling;
    const correspondingIcon = selectedLi.querySelector('.fa-chevron-right');

    // Закрыть все абзацы и вернуть иконки в исходное состояние
    allParagraphs.forEach(p => {
        if (p !== correspondingParagraph) {
            p.classList.remove('height');
        }
    });

    allIcons.forEach(icon => {
        if (icon !== correspondingIcon) {
            icon.classList.remove('rotate');
            icon.classList.remove('color');
        }
    });

    // Открыть или закрыть соответствующий абзац и изменить иконку
    correspondingParagraph.classList.toggle('height');
    correspondingIcon.classList.toggle('rotate');
    correspondingIcon.classList.toggle('color');
}