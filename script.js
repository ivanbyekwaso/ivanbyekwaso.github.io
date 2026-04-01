const sections = document.querySelectorAll(".section");
const whatsapp = document.querySelector(".floating-whatsapp");

function handleScroll() {

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });

  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition > pageHeight - 120) {
    whatsapp.classList.add("expanded");
  } else {
    whatsapp.classList.remove("expanded");
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
