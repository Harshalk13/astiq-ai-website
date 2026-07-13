// ===============================
// ASTIQ AI - script.js
// ===============================

// Cursor Glow
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// Scroll Reveal
const reveals = document.querySelectorAll(
    "section, .card, .step, .question"
);

function revealElements() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("active");
            el.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// Navbar Active Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Floating Logo Effect
const logo = document.querySelector(".hero-right img");

if(logo){

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/40;
let y=(window.innerHeight/2-e.pageY)/40;

logo.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

}

// Card Hover Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// Header Blur on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.75)";
header.style.backdropFilter="blur(25px)";

}else{

header.style.background="rgba(0,0,0,.35)";

}

});

// Loading Animation
window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

// FAQ Accordion
const faq = document.querySelectorAll(".question");

faq.forEach(item=>{

const answer=item.querySelector("p");

answer.style.maxHeight="0";
answer.style.overflow="hidden";
answer.style.transition=".4s";

item.addEventListener("click",()=>{

const open=item.classList.contains("open");

faq.forEach(i=>{

i.classList.remove("open");
i.querySelector("p").style.maxHeight="0";

});

if(!open){

item.classList.add("open");
answer.style.maxHeight=answer.scrollHeight+"px";

}

});

});

// Console Message
console.log(
"%c🚀 Welcome to Astiq AI",
"color:#8b5cf6;font-size:22px;font-weight:bold;"
);