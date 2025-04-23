document.addEventListener("DOMContentLoaded", function () {
  const lazyFrames = document.querySelectorAll("iframe[data-src]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const iframe = entry.target;
        iframe.src = iframe.dataset.src;
        observer.unobserve(iframe);
      }
    });
  });

  lazyFrames.forEach((frame) => {
    observer.observe(frame);
  });
});
