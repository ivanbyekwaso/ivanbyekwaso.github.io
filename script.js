function toggleLearn() {
  document.getElementById("learnMore").classList.toggle("hidden");
}

function setLang(lang) {
  if (lang === "de") {
    document.getElementById("title").innerText = "Elite Personal Training";
    document.getElementById("subtitle").innerText = "Erreiche deine Fitnessziele";
  } else {
    document.getElementById("title").innerText = "Elite Personal Coaching";
    document.getElementById("subtitle").innerText = "Transform your body, mindset and performance";
  }
}
