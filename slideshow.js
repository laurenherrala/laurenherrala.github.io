"use strict";

const image = document.getElementById("home-image");
const status = document.getElementById("slide-status");
const images = [1, 2, 3, 4].map((number) => `assets/home/${number}.jpg`);
let current = 0;

function preloadNext() {
  const next = new Image();
  next.src = images[(current + 1) % images.length];
}

function showImage(direction) {
  current = (current + direction + images.length) % images.length;
  image.src = images[current];
  image.alt = `Artwork by Lauren Herrala, image ${current + 1} of ${images.length}`;
  status.textContent = `Image ${current + 1} of ${images.length}`;
  preloadNext();
}

document.querySelector(".previous").addEventListener("click", () => showImage(-1));
document.querySelector(".next").addEventListener("click", () => showImage(1));
document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    showImage(event.key === "ArrowLeft" ? -1 : 1);
  }
});

preloadNext();
