// image slider
document.addEventListener("DOMContentLoaded", function () {
  // Ensure Swiper is properly initialized
  if (typeof Swiper === "undefined") {
    console.error("Swiper is not loaded. Please include the Swiper library.");
    return;
  }

  // Initialize Swiper
  var swiper = new Swiper(".ImageSlider", {
    // Enable navigation buttons
    navigation: {
      nextEl: ".custom-next-arrow",
      prevEl: ".custom-prev-arrow",
    },

    // Optional: Loop the slider
    loop: true,

    // Optional: Add some space between slides
    spaceBetween: 5, // Adjusted to 10 for better spacing

    // Optional: Effect
    effect: "slide", // You can try "fade", "cube", "coverflow", "flip"
  });
});
