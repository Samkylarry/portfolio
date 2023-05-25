const navItems = document.querySelector ('#nav__items');
const openNavBtn = document.querySelector ('#open-menu-btn');
const closeNavBtn = document.querySelector ('#close-menu-btn');

openNavBtn.addEventListener ('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';

})

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav)


//close nav menu  whena menu item is clicked
if(window.innerWidth < 1024) {
  document.querySelectorAll ('#nav__items li a').forEach(navItem => {
    navItem.addEventListener('click', () => {
      closeNav();
    }) 
  })
}


var typed = new Typed('.auto-type', {
  strings: ["There!", " I'm" ],
  typeSpeed: 100,
  backSpeed:50,
  loo:true
});



//change navbar style on small screen
window.addEventListener('scroll',() => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);

})
