document.querySelectorAll(".accordion-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion-item");
    const content = item.querySelector(".accordion-content");
    const iconImg = button.querySelector(".icon-img");

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
      img.classList.remove("img-color-active", "rotate-180");
      img.classList.add("img-color-inactive");
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
