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
    posit.classList.add('show-signup')
    close.classList.add('show-menu')
    // posit.style.margin = "6rem"
    // Up.classList.add('translate')
})
close.addEventListener('click', ()=> {
    posit.classList.remove('show-signup')
    // close.classList.add('show-menu')
    // Up.classList.add('translate')
})

const sr = ScrollReveal({
    origin: 'top',      // Origin of the animation
    distance: '100px',   // Distance to start animation (can be in pixels or percentage)
    duration: 500,     // Duration of the animation in milliseconds
    delay: 200,         // Delay before the animation starts
    // easing: 'ease',     // Easing function for the animation
    mobile: false       // Whether to enable animations on mobile devices
    // loop : true
  });
  
//   const tex = document.querySelectorAll('.tex');
//   const ship = document.querySelectorAll('.ship');
// sr.reveal('.tex', {origin: 'top'});
// sr.reveal('.ship', {origin: 'left'});
// sr.reveal('.Kindz', {origin: 'right'});
// sr.reveal('.Air', {origin: 'left'});
// sr.reveal('.Air3', {origin: 'left'});


ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 700,
    delay: 1000,
})
ScrollReveal().reveal('.tex', {origin: 'top'});
sr.reveal('.Kindz', {origin: 'right'});
sr.reveal('.Air', {origin: 'left'});
sr.reveal('.Air3', {origin: 'left'});
ScrollReveal().reveal('.', {origin: 'left'});
ScrollReveal().reveal('.image', {origin: 'left'});
ScrollReveal().reveal('.headline', {origin: 'right'});



const serve = document.querySelector(".server");
const pus = document.querySelector(".uloo");

const serve2 = document.querySelector(".server2");
const pus2 = document.querySelector(".uloo2");

const serve3 = document.querySelector(".server3");
const pus3 = document.querySelector(".uloo3");


serve.addEventListener('click', ()=> {
    pus.classList.toggle("out")
})
serve2.addEventListener('click', ()=> {
    pus2.classList.toggle("out2")
})
serve3.addEventListener('click', ()=> {
    pus3.classList.toggle("out3")
})
// serve.ForEach((s, i) => {
//     s.addEventListener('click', ()=> {
//         pus[i].classList.add('out')
//     })
// })