const cards = document.querySelectorAll(".card");

function animateCards() {
  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 150); // stagger effect
    }
  });
}

window.addEventListener("scroll", animateCards);
window.addEventListener("load", animateCards);
