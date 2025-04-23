const scrollContainer = document.getElementById("categoryScroll");

const scrollAmount = 200;

document.getElementById("scrollLeft").addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

document.getElementById("scrollRight").addEventListener("click", () => {
  scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
