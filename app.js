const img = document.querySelector(".img");
const nav = document.querySelector("nav");
const menu = document.querySelector(".Menu");

img.addEventListener('click', ()=> {
    nav.classList.toggle("open")
})


const signUp = document.querySelector(".button");
const posit = document.querySelector(".posit");
const close = document.querySelector(".close-menu");
const Up = document.querySelector(".Sign-up");

signUp.addEventListener('click', ()=> {
    posit.classList.toggle('show-signup')
    close.classList.toggle('show-menu')
    Up.classList.add('translate')
})

const sr = ScrollReveal({
    loop: true,
    origin: 'top',      // Origin of the animation
    distance: '20px',   // Distance to start animation (can be in pixels or percentage)
    duration: 1000,     // Duration of the animation in milliseconds
    delay: 200,         // Delay before the animation starts
    easing: 'ease',     // Easing function for the animation
    mobile: false       // Whether to enable animations on mobile devices
  });
  
  const tex = document.querySelectorAll('.tex');
  const ship = document.querySelectorAll('.ship');
sr.reveal('.tex', {origin: 'top'});
sr.reveal('.ship', {origin: 'left'});


// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200,
// })
// ScrollReveal().reveal('.tex', {origin: 'top'});
// ScrollReveal().reveal('.', {origin: 'left'});
// ScrollReveal().reveal('.image', {origin: 'left'});
// ScrollReveal().reveal('.headline', {origin: 'right'});
