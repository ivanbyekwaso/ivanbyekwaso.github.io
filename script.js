const sections = document.querySelectorAll(".section");
const wa = document.querySelector(".wa-button");

function handleScroll() {

  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    wa.classList.add("expanded");
  } else {
    wa.classList.remove("expanded");
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
