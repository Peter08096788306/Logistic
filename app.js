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
  
  const tex = document.querySelectorAll('.tex');
  const ship = document.querySelectorAll('.ship');
sr.reveal('.tex', {origin: 'top'});
sr.reveal('.ship', {origin: 'left'});
sr.reveal('.Kindz', {origin: 'right'});
sr.reveal('.Air', {origin: 'left'});
sr.reveal('.Air3', {origin: 'left'});


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

// new Typed('.type', {
//     strings : ['We are a full-service Ocean Freight forwarder licensed by the FMC operating as Ocean Transportation lntermediary("OTI"). We provide complete international freight forwarding and logistics services, including: ocean freight, air freight, customs clearance, loading and transloading, consolidatons, warehousing and distribution (including packing and crating), cargo insurance and other value added logistics services. Our Mission is to retain our leadership in providing affordable & efficient service. Visit us today. '],
//     typeSpeed : 100,
//     loop : false
// })