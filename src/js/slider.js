document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".custom-next-arrow");
  const nextButton = document.querySelector(".custom-prev-arrow");

  const swiper = new Swiper(".card-swiper", {
    loop: false,
    grabCursor: true,
    centeredSlides: false,
    watchOverflow: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 14,
        centeredSlides: false, // 👈 FIXED here
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
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1120: {
        slidesPerView: 4,
        spaceBetween: 11,
      },
      1536: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },

    navigation: {
      nextEl: ".custom-prev-arrow",
      prevEl: ".custom-next-arrow",
    },

    on: {
      init(swiper) {
        updateArrows(swiper);
      },
      slideChange(swiper) {
        updateArrows(swiper);
      },
    },
  });

  function updateArrows(swiperInstance) {
    const slidesPerView = getSlidesPerView(swiperInstance);
    const totalSlides = swiperInstance.slides.length;

    // Hide arrows if all slides fit
    if (totalSlides <= slidesPerView) {
      prevButton.classList.add("!hidden");
      nextButton.classList.add("!hidden");
      return;
    }

    swiperInstance.isBeginning
      ? prevButton.classList.add("!hidden")
      : prevButton.classList.remove("!hidden");

    swiperInstance.isEnd
      ? nextButton.classList.add("!hidden")
      : nextButton.classList.remove("!hidden");
  }

  function getSlidesPerView(swiperInstance) {
    const currentBreakpoint = swiperInstance.currentBreakpoint;
    const breakpointParams =
      swiperInstance.params.breakpoints[currentBreakpoint];
    return breakpointParams?.slidesPerView || 1;
  }

  // ✅ Debounced full re-render on resize
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      swiper.update();
      swiper.slideTo(0); // 👈 Reset to first to avoid space on resize
      updateArrows(swiper);
    }, 250);
  });
});
