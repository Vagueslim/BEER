const slides = Array.from(document.querySelectorAll(".slide"));
const dotsContainer = document.getElementById("slide-dots");
const slideCount = document.getElementById("slide-count");
const progressBar = document.getElementById("progress-bar");
const previousButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");

let currentSlide = getInitialSlide();

function getInitialSlide() {
  const hashNumber = Number(window.location.hash.replace("#slide-", ""));
  if (Number.isInteger(hashNumber) && hashNumber >= 1 && hashNumber <= slides.length) {
    return hashNumber - 1;
  }

  return 0;
}

function formatSlideNumber(number) {
  return String(number).padStart(2, "0");
}

function renderDots() {
  dotsContainer.innerHTML = "";

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "slide-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });
}

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === currentSlide;
    slide.classList.toggle("active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  const dots = Array.from(document.querySelectorAll(".slide-dot"));
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentSlide);
    dot.setAttribute("aria-current", dotIndex === currentSlide ? "step" : "false");
  });

  slideCount.textContent = `${formatSlideNumber(currentSlide + 1)} / ${formatSlideNumber(slides.length)}`;
  progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  previousButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === slides.length - 1;
  window.history.replaceState(null, "", `#slide-${currentSlide + 1}`);
}

function goToNextSlide() {
  showSlide(currentSlide + 1);
}

function goToPreviousSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("keydown", (event) => {
  const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName);

  if (isTyping) {
    return;
  }

  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    goToNextSlide();
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goToPreviousSlide();
  }
});

previousButton.addEventListener("click", goToPreviousSlide);
nextButton.addEventListener("click", goToNextSlide);
window.addEventListener("hashchange", () => showSlide(getInitialSlide()));

renderDots();
showSlide(currentSlide);
