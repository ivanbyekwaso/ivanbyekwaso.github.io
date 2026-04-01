const sections = document.querySelectorAll(".section");
const whatsapp = document.querySelector(".floating-whatsapp");

function handleScroll() {

  // SECTION ANIMATION
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });

  // CTA EXPANSION
  const scrollBottom = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight;

  if (scrollBottom >= pageHeight - 50) {
    whatsapp.classList.add("expanded");
  } else {
    whatsapp.classList.remove("expanded");
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
