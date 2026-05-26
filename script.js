// Portfolio Loaded
console.log("Portfolio Loaded 🚀");

/* =========================
   Loading Screen
========================= */

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    },500);

  },1000);

});

/* =========================
   Navbar Scroll Effect
========================= */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    nav.style.background = "rgba(0,0,0,0.8)";
    nav.style.boxShadow =
    "0 5px 20px rgba(0,0,0,0.3)";

  }

  else{

    nav.style.background =
    "rgba(0,0,0,0.5)";

    nav.style.boxShadow = "none";

  }

});

/* =========================
   Active Navbar Menu
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){

      current =
      section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(
      link.getAttribute("href")
      === `#${current}`
    ){

      link.classList.add("active");

    }

  });

});

/* =========================
   Progress Bar
========================= */

const progressBar =
document.getElementById("progressBar");

window.addEventListener("scroll", () => {

  const scrollTop =
  document.documentElement.scrollTop;

  const scrollHeight =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

  const progress =
  (scrollTop / scrollHeight) * 100;

  progressBar.style.width =
  progress + "%";

});

/* =========================
   Back To Top Button
========================= */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    topBtn.style.display = "block";

  }

  else{

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

/* =========================
   Mobile Menu
========================= */

const menuToggle =
document.getElementById("menuToggle");

const navMenu =
document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

  if(navMenu.classList.contains("active")){

    menuToggle.innerHTML =
    '<i class="fa-solid fa-xmark"></i>';

  }

  else{

    menuToggle.innerHTML =
    '<i class="fa-solid fa-bars"></i>';

  }

});

/* =========================
   Close Mobile Menu
========================= */

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

    menuToggle.innerHTML =
    '<i class="fa-solid fa-bars"></i>';

  });

});

/* =========================
   Typing Animation
========================= */

const text = [

  "Web Developer",
  "UI/UX Designer",
  "AI Enthusiast",
  "Frontend Developer",
  "Creative Programmer"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === text.length){

    count = 0;

  }

  currentText = text[count];

  letter =
  currentText.slice(0, ++index);

  document.querySelector(
    ".hero-text h2"
  ).textContent = letter;

  if(letter.length === currentText.length){

    count++;

    index = 0;

    setTimeout(type, 1500);

  }

  else{

    setTimeout(type, 100);

  }

})();

/* =========================
   Cursor Glow Effect
========================= */

const glow =
document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

  glow.style.left =
  e.clientX + "px";

  glow.style.top =
  e.clientY + "px";

});

/* =========================
   Reveal Animation
========================= */

const revealElements =
document.querySelectorAll(
  ".about-card, .skill-card, .project-card, .contact-card"
);

const revealOnScroll = () => {

  const triggerBottom =
  window.innerHeight * 0.85;

  revealElements.forEach(el => {

    const boxTop =
    el.getBoundingClientRect().top;

    if(boxTop < triggerBottom){

      el.classList.add("show");

    }

  });

};

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* =========================
   Smooth Hover Tilt Effect
========================= */

const cards =
document.querySelectorAll(
  ".project-card, .skill-card"
);

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateX =
    ((y / rect.height) - 0.5) * -10;

    const rotateY =
    ((x / rect.width) - 0.5) * 10;

    card.style.transform =
    `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.03)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
    "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

  });

});

/* =========================
   Console Message
========================= */

console.log(
`
🔥 Portfolio by Rizki Agung Prasetya
🚀 Modern Interactive Portfolio
`
);