// Accordion toggle
document.querySelectorAll(".accordion-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion-item");
    const content = item.querySelector(".accordion-content");
    const iconImg = button.querySelector(".icon-img");
    const iconImage = button.querySelector(".icon-image");

    const isOpen = content.classList.contains("open");

    // Close all
    document.querySelectorAll(".accordion-content").forEach((el) => {
      el.style.maxHeight = null;
      el.classList.remove("open");
      el.style.opacity = 0;
    });

    document.querySelectorAll(".accordion-toggle").forEach((btn) => {
      btn.classList.remove("text-lightblack");
      btn.classList.add("text-exodusFruit");
      const img = btn.querySelector(".icon-img");
      const image = btn.querySelector(".icon-image");
      img.classList.remove("img-color-active", "rotate-180");
      img.classList.add("img-color-inactive");
      image.classList.remove("img-color-active");
      image.classList.add("img-color-inactive");
    });

    // Open this one if it was closed
    if (!isOpen) {
      content.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = 1;

      button.classList.remove("text-exodusFruit");
      button.classList.add("text-lightblack");
      iconImg.classList.remove("img-color-inactive");
      iconImg.classList.add("img-color-active", "rotate-180");
      iconImage.classList.remove("img-color-inactive");
      iconImage.classList.add("img-color-active");
    }
  });
});

// Scroll to top
const scrollButton = document.getElementById("scroll");
window.addEventListener("scroll", () => {
  scrollButton.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Star Rating System
const stars = document.querySelectorAll("#starRating .star");
const ratingText = document.getElementById("ratingText"); // <--- New addition
let rating = 4; // default

stars.forEach((star, idx) => {
  star.classList.add("inactive");

  // Highlight stars on hover
  star.addEventListener("mouseover", () => {
    updateStars(idx + 1);
  });

  // Reset highlight on mouse leave
  star.addEventListener("mouseleave", () => {
    updateStars(rating);
  });

  // Set rating on click
  star.addEventListener("click", () => {
    rating = idx + 1;
    updateStars(rating);
    updateRatingText(rating); // <--- New addition
    console.log("Selected rating:", rating);
  });
});

function updateStars(rating) {
  stars.forEach((star, i) => {
    if (i < rating) {
      star.classList.add("active");
      star.classList.remove("inactive");
    } else {
      star.classList.remove("active");
      star.classList.add("inactive");
    }
  });
}

function updateRatingText(rating) {
  if (ratingText) {
    ratingText.innerText = `${rating}/5`;
  }
}

// Initialize default
updateStars(rating);
updateRatingText(rating); // <--- New addition
