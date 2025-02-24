document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typed", {
    strings: ["Frontend Designer.", "React Developer", "Web Developer."],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
  });
});

let menuIcon = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  if (navbar.style.display === "none" || navbar.style.display === "") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));

      let activeLink = document.querySelector("header nav a[href*=" + id + "]");
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};
