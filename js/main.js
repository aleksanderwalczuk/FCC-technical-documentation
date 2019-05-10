const menu = document.querySelector('.hamburger');
const hamburger_bar1 = document.querySelector('span.bar-1');
const hamburger_bar2 = document.querySelector('span.bar-2');
const hamburger_bar3 = document.querySelector('span.bar-3');
const collapsingMenu = document.querySelector('.resizable');
const linksContainer = document.querySelector('.nav-link-container');
const footer = document.querySelector('.footer-header');

menu.addEventListener('click', function () {
    this.classList.toggle('hamburger-active');
    collapsingMenu.classList.toggle('height-auto');
    linksContainer.classList.toggle('hidden');
    footer.classList.toggle('hidden')

}, false);

//Changing hamburger color on scroll function
function scrollColor() {

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        // hamburger_bars.style.backgroundColor ='#000'
        hamburger_bar1.style.backgroundColor ='#000';
        hamburger_bar2.style.backgroundColor ='#000';
        hamburger_bar3.style.backgroundColor ='#000';
    }
    else {
        hamburger_bar1.style.backgroundColor ='#fff';
        hamburger_bar2.style.backgroundColor ='#fff';
        hamburger_bar3.style.backgroundColor ='#fff';
    }
}

window.addEventListener("scroll", scrollColor);