const searchInput = document.getElementById("searchInputSuggetion");

const suggestionsList = document.getElementById("suggestionsList");
const suggestionItems = document.querySelectorAll(".suggestion-item");

function showDropdown() {
  suggestionsList.classList.remove("hidden");
  suggestionsList.classList.remove("dropdown-exit", "dropdown-exit-active");
  suggestionsList.classList.add("dropdown-enter");
  requestAnimationFrame(() => {
    suggestionsList.classList.add("dropdown-enter-active");
    suggestionsList.classList.remove("dropdown-enter");
  });
}

function hideDropdown() {
  suggestionsList.classList.remove("dropdown-enter-active");
  suggestionsList.classList.add("dropdown-exit", "dropdown-exit-active");
  setTimeout(() => {
    suggestionsList.classList.add("hidden");
    suggestionsList.classList.remove("dropdown-exit", "dropdown-exit-active");
  }, 200);
}

// Show all suggestions when typing
searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim();
  if (term.length === 0) {
    hideDropdown();
  } else {
    showDropdown();
  }
});

// Handle outside click
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
    hideDropdown();
  }
});

// Suggestion click handler
suggestionItems.forEach((item) => {
  item.addEventListener("click", () => {
    const text = item.dataset.text || "";
    searchInput.value = text;
    hideDropdown();
  });
});
