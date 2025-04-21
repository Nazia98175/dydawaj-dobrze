// Get DOM elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const searchCloseBtn = document.getElementById("searchCloseBtn");
const sidebarCloseBtn = document.getElementById("close");

// Toggle mobile sidebar
function toggleMobileMenu() {
  const isOpen = mobileSidebar.classList.toggle("open");
  sidebarOverlay.classList.toggle("active", isOpen);
  sidebarCloseBtn.classList.toggle("active", isOpen);

  // Close search overlay if it's open
  if (searchOverlay.classList.contains("open")) {
    searchOverlay.classList.remove("open");
    sidebarCloseBtn.classList.remove("open"); // fixed this line
  }

  // Prevent or restore body scroll
  document.body.style.overflow = isOpen ? "hidden" : "";
}

// Toggle search overlay
function toggleSearchOverlay() {
  const isOpen = searchOverlay.classList.toggle("open");

  // Close mobile sidebar if it's open
  if (mobileSidebar.classList.contains("open")) {
    mobileSidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
    sidebarCloseBtn.classList.remove("active");
  }

  // Focus input when opening
  if (isOpen) {
    const input = document.querySelector(".search-overlay-input");
    input && input.focus();
  }

  // Always allow body scroll in search overlay
  document.body.style.overflow = "";
}

// Event listeners
mobileMenuBtn.addEventListener("click", toggleMobileMenu);
sidebarOverlay.addEventListener("click", toggleMobileMenu);
searchBtn.addEventListener("click", toggleSearchOverlay);
searchCloseBtn.addEventListener("click", toggleSearchOverlay);

// Optional: close sidebar via close button
sidebarCloseBtn.addEventListener("click", toggleMobileMenu);

// Close overlays on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileSidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
    sidebarCloseBtn.classList.remove("active");
    searchOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
});

// Close search overlay only when clicking outside of it and not on the search button
document.addEventListener("click", function (event) {
  const isInsideSearch = event.target.closest("#searchOverlay");
  const isSearchBtn = event.target.closest("#searchBtn");
  if (!isInsideSearch && !isSearchBtn) {
    searchOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
});

// DOM elements
const searchInput = document.getElementById("search-input");
const suggestionsContainer = document.getElementById("suggestions");
const searchContainer = document.getElementById("search-container");
const suggestionItems = document.querySelectorAll(".suggestion-item");

// Show/hide clear button and filter suggestions based on input
searchInput.addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();

  // Filter and display suggestions
  if (query) {
    let hasVisibleSuggestions = false;

    // Loop through all suggestion items and show/hide based on match
    suggestionItems.forEach((item) => {
      console.log(item);

      const itemName = item.getAttribute("data-name").toLowerCase();
      console.log(itemName);

      if (itemName.includes(query)) {
        item.style.display = "flex";
        hasVisibleSuggestions = true;
      } else {
        item.style.display = "none";
      }
    });

    // Show suggestions container if there are visible suggestions
    if (hasVisibleSuggestions) {
      suggestionsContainer.classList.remove("hidden");
    } else {
      suggestionsContainer.classList.add("hidden");
    }
  } else {
    suggestionsContainer.classList.add("hidden");
  }
});

// Handle click on suggestion items
suggestionItems.forEach((item) => {
  item.addEventListener("click", function () {
    const name = this.getAttribute("data-name");
    searchInput.value = name;
    suggestionsContainer.classList.add("hidden");
    clearButton.classList.remove("hidden");
  });
});

// Show suggestions on focus if there's text
searchInput.addEventListener("focus", function () {
  const query = this.value.trim().toLowerCase();
  if (query) {
    let hasVisibleSuggestions = false;

    // Loop through all suggestion items and show/hide based on match
    suggestionItems.forEach((item) => {
      const itemName = item.getAttribute("data-name").toLowerCase();
      if (itemName.includes(query)) {
        item.style.display = "flex";
        hasVisibleSuggestions = true;
      } else {
        item.style.display = "none";
      }
    });

    // Show suggestions container if there are visible suggestions
    if (hasVisibleSuggestions) {
      suggestionsContainer.classList.remove("hidden");
    }
  }
});

// DOM Elements
const categoriesDropdown = document.getElementById("categoriesDropdown");
const categoriesBtn = document.getElementById("categoriesBtn");
const categoriesPanel = document.getElementById("categoriesPanel");
const arrowIcon = categoriesBtn.querySelector(".arrow-icon-dropdown");

let isDropdownOpen = false;
let hoverTimer;

// Only the button should trigger the dropdown
categoriesBtn.addEventListener("mouseenter", function (e) {
  e.preventDefault();

  // Clear any existing timers
  clearTimeout(hoverTimer);

  categoriesPanel.classList.add("show");
  arrowIcon.classList.add("rotate");
  isDropdownOpen = true;
});

// When leaving the entire dropdown container
categoriesDropdown.addEventListener("mouseleave", function (e) {
  e.preventDefault();

  // Add a small delay before closing to prevent flickering
  hoverTimer = setTimeout(() => {
    categoriesPanel.classList.remove("show");
    arrowIcon.classList.remove("rotate");
    isDropdownOpen = false;
  }, 100);
});

// When entering the dropdown container, cancel any pending close
categoriesPanel.addEventListener("mouseenter", function (e) {
  clearTimeout(hoverTimer);
});

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth < 1024) {
    categoriesPanel.classList.remove("show");
    arrowIcon.classList.remove("rotate");
    isDropdownOpen = false;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownContent = document.getElementById("dropdownContent");
  const dropdownArrow = document.getElementById("dropdownArrow");

  dropdownBtn.addEventListener("click", function () {
    const isOpen = dropdownContent.classList.toggle("open");

    if (isOpen) {
      // Dropdown is open
      dropdownArrow.classList.add("rotate-90", "arrow-change");
      dropdownBtn.classList.remove("text-[#243237]");
      dropdownBtn.classList.add("bg-orange-400", "text-white");
    } else {
      // Dropdown is closed
      dropdownArrow.classList.remove("rotate-90", "arrow-change");
      dropdownBtn.classList.remove("text-white");
      dropdownBtn.classList.add("text-[#243237]");
      dropdownBtn.classList.remove("bg-orange-400");
    }
  });
});

// Get DOM elements
const searchInputMobile = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestionsBox");

// Show suggestions when typing
searchInputMobile.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    suggestionsBox.style.display = "block";
  } else {
    suggestionsBox.style.display = "none";
  }
});

// Hide suggestions when clicking outside
document.addEventListener("click", function (event) {
  if (!event.target.closest(".max-w-md")) {
    suggestionsBox.style.display = "none";
  }
});

// Function to select a suggestion
function selectSuggestion(text) {
  searchInputMobile.value = text;
  suggestionsBox.style.display = "none";
}

// Show suggestions on focus
searchInputMobile.addEventListener("focus", function () {
  if (this.value.trim() !== "") {
    suggestionsBox.style.display = "block";
  }
});

// SCROLL TO TOP BUTTON FUNCTIONALITY
window.addEventListener("scroll", () => {
  const scrollButton = document.getElementById("scroll");
  if (window.scrollY > 150) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});
document.getElementById("scroll").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
