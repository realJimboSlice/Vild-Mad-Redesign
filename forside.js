ScrollReveal({
  //reset: true,
  distance: "90px",
  durationn: 2000,
  delay: 120,
});

ScrollReveal().reveal(".textsection h1, .tekst, .billede2, .text2 h1, .tekst2 h1", { origin: "top" });
ScrollReveal().reveal(".textsection p, .text2 p", { origin: "bottom" });
ScrollReveal().reveal(".forside, .forside1, .forside2, .forside3, ul li, .app", { origin: "bottom", distance: "140px" });
ScrollReveal().reveal(".billede1", { origin: "left" });
ScrollReveal().reveal("button", { origin: "top", delay: 1000 });

ScrollReveal().reveal(".container", { delay: 4000 });

/* burgermenu */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");

  // Tilføjer scroll-down classen når der scrolles
  if (window.scrollY > 0) {
    header.classList.add("scroll-down");
  } else {
    header.classList.remove("scroll-down");
  }
});

document.getElementById("komIgangButton").addEventListener("click", function () {
  var textsection = document.getElementById("textsection");
  if (textsection) {
    textsection.scrollIntoView({ behavior: "smooth" });
  }
});

document.getElementById("container").addEventListener("click", function () {
  var section2 = document.getElementById("section2");
  if (section2) {
    section2.scrollIntoView({ behavior: "smooth" });
  }
});

document.getElementById("container1").addEventListener("click", function () {
  var tekst2 = document.getElementById("tekst2");
  if (tekst2) {
    tekst2.scrollIntoView({ behavior: "smooth" });
  }
});

document.getElementById("footer-iconup").addEventListener("click", function () {
  var forside = document.getElementById("forside");
  if (forside) {
    forside.scrollIntoView({ behavior: "smooth" });
  }
});
