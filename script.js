// Portfolio Loaded
console.log("Portfolio Loaded");

// Navbar Shadow Scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    nav.style.background = "rgba(0,0,0,0.8)";
    nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  }

  else{
    nav.style.background = "rgba(0,0,0,0.5)";
    nav.style.boxShadow = "none";
  }

});

// Active Navbar Menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("active");
    }

  });

});

// Back To Top Button
const topBtn = document.getElementById("topBtn");

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

// Typing Animation
const text = [
  "Web Developer",
  "UI/UX Designer",
  "AI Enthusiast"
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

  letter = currentText.slice(0, ++index);

  document.querySelector(".hero-text h2").textContent = letter;

  if(letter.length === currentText.length){

    count++;
    index = 0;

    setTimeout(type, 1000);

  }

  else{
    setTimeout(type, 100);
  }

})();