// Target values for each counter
const targetValues = [
  60000, // For count1
  400, // For count2
  773, // For count3
  10, // For count4
  10000, // For count5
];

// Durations for animations in milliseconds
const durations = [
  2000, // For count1
  1500, // For count2
  1800, // For count3
  1000, // For count4
  2200, // For count5
];

// Formatting options for each counter
const formatting = [
  (val) => val.toLocaleString() + "+", // For count1 (with plus sign)
  (val) => val.toLocaleString() + "+", // For count2 (with plus sign)
  (val) => val.toLocaleString(), // For count3 (plain number)
  (val) => val.toLocaleString() + "+", // For count4 (with plus sign)
  (val) => val.toLocaleString() + "zł", // For count5 (with zl currency)
];

// Flag to track if animations have been triggered
let animationsTriggered = false;

// Function to animate counting
function animateCount(elementId, targetValue, duration, formatFunc) {
  const element = document.getElementById(elementId);
  const startTime = performance.now();
  const startValue = 0;

  function updateCount(currentTime) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime < duration) {
      const progress = elapsedTime / duration;
      // Easing function to make animation more natural
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(
        startValue + easedProgress * (targetValue - startValue)
      );
      element.textContent = formatFunc(currentValue);
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = formatFunc(targetValue);
    }
  }

  requestAnimationFrame(updateCount);
}

// Function to start all animations
function startAnimations() {
  if (!animationsTriggered) {
    animationsTriggered = true;
    for (let i = 0; i < targetValues.length; i++) {
      animateCount(
        "count" + (i + 1),
        targetValues[i],
        durations[i],
        formatting[i]
      );
    }
  }
}

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
}

// Scroll event handler to check if stats section is visible
function handleScroll() {
  const statsSection = document.getElementById("count-hub");
  if (isInViewport(statsSection)) {
    startAnimations();
    // Remove scroll listener once animations are triggered
    window.removeEventListener("scroll", handleScroll);
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Check on initial load as well
document.addEventListener("DOMContentLoaded", handleScroll);
