const sections = document.querySelectorAll(".section");
const whatsapp = document.querySelector(".floating-whatsapp");
const bottomSection = document.getElementById("bottom-cta");

function handleScroll() {

  // SECTION ANIMATION
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });

  // CTA POSITION
  const bottomTop = bottomSection.getBoundingClientRect().top;

  if (bottomTop < window.innerHeight - 100) {
    whatsapp.classList.add("expanded");
  } else {
    whatsapp.classList.remove("expanded");
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
