document.addEventListener("DOMContentLoaded", function () {
  const swiperElement = document.querySelector(".card-swiper");
  const totalSlides = document.querySelectorAll(".swiper-slide").length;
  const prevButton = document.querySelector(".custom-next-arrow");
  const nextButton = document.querySelector(".custom-prev-arrow");

  // Initialize Swiper
  const swiper = new Swiper(".card-swiper", {
    loop: false,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 7,
      },
      633: {
        slidesPerView: 1,
        spaceBetween: 9,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1120: {
        slidesPerView: 4,
        spaceBetween: 11,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 11,
      },
    },

    navigation: {
      nextEl: ".custom-prev-arrow",
      prevEl: ".custom-next-arrow",
    },

    centeredSlides: false,
    grabCursor: true,

    on: {
      init: function () {
        updateArrows(this);
      },
      slideChange: function () {
        updateArrows(this);
      },
      resize: function () {
        this.update();
        updateArrows(this);
      },
    },
  });

  /**
   * Updates navigation arrows visibility based on swiper state
   */
  function updateArrows(swiperInstance) {
    // Get current device slidesPerView based on breakpoint
    let currentSlidesPerView = swiperInstance.params.slidesPerView;

    // All slides are visible - hide both arrows
    if (totalSlides <= currentSlidesPerView) {
      prevButton.classList.add("!hidden");
      prevButton.classList.remove("md:!flex");
      nextButton.classList.add("!hidden");
      nextButton.classList.remove("md:!flex");
      return;
    }

    // Handle beginning of slider
    if (swiperInstance.isBeginning) {
      prevButton.classList.add("!hidden");
      prevButton.classList.remove("md:!flex");
    } else {
      prevButton.classList.remove("!hidden");
      prevButton.classList.add("md:!flex");
    }

    // Handle end of slider
    if (swiperInstance.isEnd) {
      nextButton.classList.add("!hidden");
      nextButton.classList.remove("md:!flex");
    } else {
      nextButton.classList.remove("!hidden");
      nextButton.classList.add("md:!flex");
    }
  }

  // Initial update with a small delay to ensure everything is rendered
  setTimeout(() => {
    swiper.update();
    updateArrows(swiper);
  }, 100);

  // Update on window resize with debounce
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      swiper.update();
      updateArrows(swiper);
    }, 250);
  });
});
