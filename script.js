// Toggle menu (mobile)

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight navbar links on scroll

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });

    // Sticky header

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar when scrolling

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal animations

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .sub-title', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .about-col-1, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-col-2 p, .tab-contents.active-tab', { origin: 'right' });

// Typed.js animation

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop: true
});

// Tab switching function

function openTab(tabName, element) {
    let tabLinks = document.querySelectorAll(".tab-links");
    let tabContents = document.querySelectorAll(".tab-contents");

    // Remove active from all

    tabLinks.forEach(link => link.classList.remove("active-link"));
    tabContents.forEach(content => content.classList.remove("active-tab"));

    // Add active to clicked tab
    
    element.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}
