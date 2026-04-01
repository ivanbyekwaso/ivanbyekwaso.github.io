const sections = document.querySelectorAll(".section");
const whatsapp = document.querySelector(".floating-whatsapp");

function animate() {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });

  // MERGE EFFECT AT BOTTOM
  const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

  if (bottomReached) {
    whatsapp.style.bottom = "80px";
    whatsapp.style.transform = "scale(1.2)";
  } else {
    whatsapp.style.bottom = "20px";
    whatsapp.style.transform = "scale(1)";
  }
}

window.addEventListener("scroll", animate);
window.addEventListener("load", animate);
