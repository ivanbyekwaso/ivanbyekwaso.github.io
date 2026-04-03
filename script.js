function openWhatsApp(){
window.open("https://wa.me/4915566238085","_blank");
}

// ADVANCED SCROLL ENGINE
window.addEventListener("scroll", () => {

const scrollY = window.scrollY;

document.querySelectorAll(".service").forEach((el, i) => {
const rect = el.getBoundingClientRect();

```
if(rect.top < window.innerHeight){
  el.classList.add("visible");
}

// Parallax depth
el.style.transform = `translateY(${scrollY * 0.05 * (i+1)}px)`;
```

});

// WhatsApp expand
const wa = document.getElementById("waExpand");
const bottom = window.innerHeight + scrollY >= document.body.offsetHeight - 50;

if(bottom){
wa.style.bottom = "30px";
} else {
wa.style.bottom = "-120px";
}

});

// LANGUAGE
function setLang(lang){
document.querySelectorAll("[data-de]").forEach(el=>{
el.innerText = el.getAttribute("data-"+lang);
});
}

setLang("de");

// PAGE TRANSITION
document.body.style.opacity = 0;

window.onload = () => {
document.body.style.transition = "opacity 1s ease";
document.body.style.opacity = 1;
};
