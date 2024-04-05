
const btnopen = document.querySelector('#btnopen');
const btnclose = document.querySelector('#btnclose');

function openMobileMenu(){
    btnopen.setAttribute('aria-expanded', 'true');
}
function closeMobileMenu(){
    btnclose.setAttribute('aria-expanded', 'false');
}
btnopen.addEventListener('click',openMobileMenu);
btnclose.addEventListener('click',closeMobileMenu);