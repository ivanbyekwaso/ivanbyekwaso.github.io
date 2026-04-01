const sections = document.querySelectorAll(".section");

function showSections() {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);
