const sections = document.querySelectorAll(".section");
const wa = document.querySelector(".wa-container");

function handleScroll() {

  // section animations
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });

  // whatsapp expand
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition > pageHeight - 120) {
    wa.classList.add("expanded");
  } else {
    wa.classList.remove("expanded");
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
