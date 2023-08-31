const img = document.querySelector(".img");
const nav = document.querySelector("nav");
const menu = document.querySelector(".Menu");

img.addEventListener('click', ()=> {
    nav.classList.toggle("open")
})




const signUp = document.querySelector("#button");
const posit = document.querySelector("#show-container");
const close = document.querySelector("#close-menu");

signUp.addEventListener('click', ()=> {
    posit.classList.add('show-signup')
    close.classList.add('show-menu')
});
close.addEventListener('click', ()=> {
    posit.classList.remove('show-signup')
});

const signUp2 = document.querySelector("#button2");
const posit2 = document.querySelector("#show-container2");
const close2 = document.querySelector("#close-menu2");

signUp2.addEventListener('click', ()=> {
    posit2.classList.add('show-signup')
    close2.classList.add('show-menu')
});
close2.addEventListener('click', ()=> {
    posit2.classList.remove('show-signup')
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
})



new Typed('.type2', {
    strings : ['We confirm receipt, process payment, and package your Item(s) accordingly and set ready for shipment. '],
    typeSpeed : 40,
})



new Typed('.type3', {
    strings : ['We ship your item(s) and deliver to your final destination. Air freiht: 7-10 days, RO-RO: 21 days, Container: 6-8 weeks.'],
    typeSpeed : 50,
});



document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    // const signupConfirm = document.getElementById("signupConfirm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
        const storedUser = localStorage.getItem(username);

        if (storedUser && JSON.parse(storedUser).password === password) {
            alert("Login successful!");
        } else {
            alert("Invalid username or password.");
        }
    });

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("signupUsername").value;
        const password = document.getElementById("signupPassword").value;

        if (localStorage.getItem(username)) {
            alert("Username already exists.");
        } else {
            const user = { username, password };
            localStorage.setItem(username, JSON.stringify(user));
            alert("Signup successful! You can now log in.");
        }
    });
});
