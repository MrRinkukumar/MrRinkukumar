//header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  const headerHeight = header.offsetHeight;
  const headerContent = header.querySelector(".header-content");

  if (scrollTop > headerHeight / 2) {
    headerContent.style.opacity = "0";
  } else {
    headerContent.style.opacity = "1";
  }
});
//navbar
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});

//project
// Smooth scrolling to project section
const projectsLink = document.querySelector(".navbar-nav li:nth-child(2) a");
const projectsSection = document.querySelector(".projects");
projectsLink.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});
