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
});
close.addEventListener('click', ()=> {
    posit.classList.remove('show-signup')
});

ScrollReveal({
    reset: true,
    distance: '300px',
    duration: 800,
    delay: 500,
})
ScrollReveal().reveal('.ship', {origin: 'top'});
ScrollReveal().reveal('.tex', {origin: 'right'});
ScrollReveal().reveal('.Kindz', {origin: 'right'});
ScrollReveal().reveal('.Bus', {origin: 'right'});
ScrollReveal().reveal('.Air', {origin: 'left'});
ScrollReveal().reveal('.Air2', {origin: 'left'});
ScrollReveal().reveal('.Air3', {origin: 'left'});
// ScrollReveal().reveal('.Air', {origin: 'left'});


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

new Typed('.type', {
    strings : ['Drop off youe item(s) in person or have it mailed to us using your in-house address you"ll get when you sign up for a free account with us. '],
    typeSpeed : 60,
    // backSpeed : 150,
    // loop :true
});

new Typed('.type2', {
    strings : ['We confirm receipt, process payment, and package your Item(s) accordingly and set ready for shipment. '],
    typeSpeed : 40,
    // backSpeed : 150,
    // loop :true
});

new Typed('.type3', {
    strings : ['We ship your item(s) and deliver to your final destination. Air freiht: 7-10 days, RO-RO: 21 days, Container: 6-8 weeks.'],
    typeSpeed : 50,
    // backSpeed : 150,
    // loop :true
});

// sr.reveal('.Kindz', {origin: 'right'});
// sr.reveal('.Bus', {origin: 'right'});

