// Loader & initial page show
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.body.style.visibility = "visible";
  AOS.init({ duration: 1000, offset: 100, once: true });
});

// Typing effect
const phrases = ["Web Developer", "Creative Thinker", "Tech Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;
const typingEl = document.getElementById("typing");

function type() {
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      current = phrases[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = phrases[i].substring(0, j--);
    }
    typingEl.textContent = current;
    let delay = isDeleting ? 75 : 150;
    if (!isDeleting && j === phrases[i].length) { delay = 1000; isDeleting = true; }
    if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % phrases.length; }
    setTimeout(type, delay);
  }
}
type();

     