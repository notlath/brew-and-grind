const track = document.querySelector(".track");
const slides = Array.from(document.querySelectorAll(".slide"));
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Clone first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

let isAnimating = false;

let index = 1;
const slideCount = slides.length;

// Initial position
track.style.transform = `translateX(-${index * 100}%)`;

function move() {
  track.style.transition = "transform 0.8s ease-in-out";
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  index++;
  move();
});

prevBtn.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  index--;
  move();
});

// Teleport when hitting clones
track.addEventListener("transitionend", (e) => {
  if (e.target !== track) return;

  if (index === slideCount + 1) {
    track.style.transition = "none";
    index = 1;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  if (index === 0) {
    track.style.transition = "none";
    index = slideCount;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  isAnimating = false;
});

// Keep alignment on resize
window.addEventListener("resize", () => {
  track.style.transition = "none";
  track.style.transform = `translateX(-${index * 100}%)`;
});
