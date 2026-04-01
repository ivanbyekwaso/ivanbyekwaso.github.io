function revealElements() {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const target = this.getAttribute("href");
    if (target && !target.startsWith("http") && !target.startsWith("#")) {
      e.preventDefault();
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = target;
      }, 400);
    }
  });
});

window.addEventListener("scroll", revealElements);
window.addEventListener("load", () => {
  revealElements();
  document.body.style.opacity = 1;
});
